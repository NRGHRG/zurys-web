import type { Metadata } from "next";

import { ProductCatalog } from "@/components/catalog/product-catalog";
import { NewsletterSection } from "@/components/sections/newsletter";
import { PageHeader } from "@/components/sections/page-header";
import { menuCategoryGroups } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Promociones",
  description: "Promociones y combos especiales de Zurys.",
};

export default function PromocionesPage() {
  const promoCategories = [...menuCategoryGroups.promociones];

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Ahorra con estilo"
        title="Promociones"
        description="Combos pensados para desayuno, brunch y celebraciones con la calidad premium de Zurys."
      />
      <ProductCatalog
        initialCategory={promoCategories[0] ?? "all"}
        allowedCategories={promoCategories}
      />
      <NewsletterSection />
    </div>
  );
}
