import { Card } from "@/components/ui/card";

export default function AdminPage() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <h2 className="text-lg font-semibold">Gestión de Productos</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Base lista para CRUD de catálogo y categorías.
        </p>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold">Reservas</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Próxima integración con panel de confirmación y estados.
        </p>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold">Mensajes</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Preparado para visualizar y responder consultas de contacto.
        </p>
      </Card>
    </div>
  );
}
