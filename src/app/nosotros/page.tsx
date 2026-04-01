import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la historia, propósito y estándares de calidad de Zurys.",
};

export default function NosotrosPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Quiénes somos"
        title="Zurys, café y pastelería de autor"
        description="Creamos una experiencia cálida, elegante y confiable para personas que valoran sabor, diseño y atención." 
      />

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <h2 className="text-lg font-semibold">Propósito</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Convertir cada visita en un momento especial a través de productos de alta calidad.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Estándar</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Selección cuidada de insumos, procesos consistentes y presentación premium.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Experiencia</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Espacio moderno, servicio cercano y foco permanente en confianza y detalle.
          </p>
        </Card>
      </section>

      <TestimonialsSection />
    </div>
  );
}
