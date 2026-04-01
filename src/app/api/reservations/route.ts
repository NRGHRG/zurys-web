import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { isAllowedOrigin } from "@/lib/security/request";
import { sanitizeMultilineText, sanitizeText } from "@/lib/security/sanitize";
import { reservationSchema } from "@/lib/validations/reservation";

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");
    if (!isAllowedOrigin(origin)) {
      return NextResponse.json({ error: "Origen no permitido" }, { status: 403 });
    }

    const body = await request.json();
    const parsed = reservationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Payload inválido", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    await prisma.reservation.create({
      data: {
        name: sanitizeText(parsed.data.name),
        email: sanitizeText(parsed.data.email.toLowerCase()),
        phone: parsed.data.phone ? sanitizeText(parsed.data.phone) : null,
        guests: parsed.data.guests,
        reservedFor: new Date(parsed.data.reservedFor),
        notes: parsed.data.notes ? sanitizeMultilineText(parsed.data.notes) : null,
      },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No fue posible procesar tu solicitud" },
      { status: 500 }
    );
  }
}
