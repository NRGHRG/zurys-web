export function NewsletterSection() {
  return (
    <section className="rounded-2xl border border-border bg-muted/30 p-6">
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Recibe novedades y promociones
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Suscríbete para enterarte antes de lanzamientos y promociones semanales.
          </p>
        </div>
        <form className="flex w-full max-w-md gap-2">
          <input
            type="email"
            placeholder="Tu correo"
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
            aria-label="Correo para newsletter"
          />
          <button
            type="submit"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  );
}
