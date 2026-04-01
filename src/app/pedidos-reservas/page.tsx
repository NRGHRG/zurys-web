import type { Metadata } from "next";

import { ReservationForm } from "@/components/forms/reservation-form";
import { PageHeader } from "@/components/sections/page-header";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Pedidos y Reservas",
  description: "Reserva mesa o solicita pedidos especiales en Zurys.",
};

export default function PedidosReservasPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Conversión"
        title="Pedidos y Reservas"
        description="Agenda tu visita o solicita pedidos para eventos con atención personalizada."
      />

      <Card className="space-y-4">
        <ReservationForm />
      </Card>
    </div>
  );
}
