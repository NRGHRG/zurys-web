import { testimonials } from "@/lib/data/products";

export function TestimonialsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">Reseñas de clientes</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-xl border border-border bg-background p-5"
          >
            <p className="text-sm text-muted-foreground">“{item.quote}”</p>
            <p className="mt-3 text-sm font-semibold">{item.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
