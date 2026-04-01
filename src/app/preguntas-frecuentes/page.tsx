import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { faqs } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Respuestas rápidas sobre pedidos, reservas y productos Zurys.",
};

export default function FAQPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="FAQ"
        title="Preguntas frecuentes"
        description="Todo lo que necesitas saber antes de visitar o hacer tu pedido en Zurys."
      />

      <section className="space-y-3">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="rounded-xl border border-border bg-background p-4"
          >
            <summary className="cursor-pointer text-sm font-semibold">
              {item.question}
            </summary>
            <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
}
