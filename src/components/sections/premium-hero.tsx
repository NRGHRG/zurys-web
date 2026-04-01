import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function PremiumHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1800&q=80"
          alt="Café de especialidad Zurys"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 grid min-h-[460px] content-end gap-5 p-6 md:p-10">
        <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/80">
          Cafetería & Pastelería Premium
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Zurys: experiencia gastronómica moderna en Maipú.
        </h1>
        <p className="max-w-2xl text-sm text-white/85 md:text-base">
          Café de especialidad, tortas artesanales y una atmósfera cálida para
          reuniones, pausas y celebraciones.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/carta">
            <Button size="lg">Ver carta</Button>
          </Link>
          <Link href="/pedidos-reservas">
            <Button size="lg" variant="secondary">
              Hacer pedido
            </Button>
          </Link>
          <Link href="/pedidos-reservas">
            <Button size="lg" variant="outline">
              Reservar
            </Button>
          </Link>
          <Link href="/contacto">
            <Button size="lg" variant="outline">
              Contactar
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
