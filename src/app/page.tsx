import Link from "next/link";

import { ProductCatalog } from "@/components/catalog/product-catalog";
import { LocationHoursSection } from "@/components/sections/location-hours";
import { NewsletterSection } from "@/components/sections/newsletter";
import { PremiumHero } from "@/components/sections/premium-hero";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="space-y-10 md:space-y-14">
      <PremiumHero />

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Productos destacados
            </h2>
            <p className="text-sm text-muted-foreground">
              Selección premium de cafetería y pastelería.
            </p>
          </div>
          <Link href="/carta" className="hidden md:inline-flex">
            <Button variant="outline">Ver todo</Button>
          </Link>
        </div>
        <ProductCatalog featuredOnly />
      </section>

      <TestimonialsSection />
      <LocationHoursSection />
      <NewsletterSection />
    </div>
  );
}
