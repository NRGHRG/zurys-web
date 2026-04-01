import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { LocationHoursSection } from "@/components/sections/location-hours";
import { PageHeader } from "@/components/sections/page-header";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos para pedidos, reservas y consultas de Zurys.",
};

export default function ContactoPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Conversemos"
        title="Contacto"
        description="¿Tienes dudas, pedido especial o cotización? Nuestro equipo te responde rápidamente."
      />

      <Card className="space-y-4">
        <ContactForm />
      </Card>

      <LocationHoursSection />
    </div>
  );
}
