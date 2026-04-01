import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { isAllowedOrigin } from "@/lib/security/request";
import { sanitizeMultilineText, sanitizeText } from "@/lib/security/sanitize";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");
    if (!isAllowedOrigin(origin)) {
      return NextResponse.json({ error: "Origen no permitido" }, { status: 403 });
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Payload inválido", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const cleanData = {
      name: sanitizeText(parsed.data.name),
      email: sanitizeText(parsed.data.email.toLowerCase()),
      subject: sanitizeText(parsed.data.subject),
      message: sanitizeMultilineText(parsed.data.message),
    };

    await prisma.contactMessage.create({
      data: cleanData,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No fue posible procesar tu solicitud" },
      { status: 500 }
    );
  }
}
