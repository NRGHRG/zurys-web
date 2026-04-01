import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-border bg-muted/30 p-4">
        <h1 className="text-xl font-semibold tracking-tight">Panel Admin (Base)</h1>
        <p className="text-sm text-muted-foreground">
          Estructura preparada para escalar con autenticación basada en roles.
        </p>
      </header>
      {children}
    </section>
  );
}
