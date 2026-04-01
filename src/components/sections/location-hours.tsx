import { siteConfig } from "@/config/site";

export function LocationHoursSection() {
  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <article className="rounded-xl border border-border bg-background p-5">
        <h2 className="text-xl font-semibold tracking-tight">Ubicación</h2>
        <p className="mt-2 text-sm text-muted-foreground">{siteConfig.address}</p>
        <div className="mt-4 overflow-hidden rounded-lg border border-border">
          <iframe
            title="Mapa de Zurys"
            src="https://www.google.com/maps?q=Av.%20Los%20Pajaritos%203926%2C%20Maip%C3%BA&output=embed"
            className="h-64 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </article>

      <article className="rounded-xl border border-border bg-background p-5">
        <h2 className="text-xl font-semibold tracking-tight">Horarios</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          {siteConfig.openingHours.map((hour) => (
            <li key={hour}>{hour}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
