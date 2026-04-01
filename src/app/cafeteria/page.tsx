import type { Metadata } from "next";

import { ProductCatalog } from "@/components/catalog/product-catalog";
import { PageHeader } from "@/components/sections/page-header";
import { menuCategoryGroups } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Cafetería",
  description: "Café de especialidad, bebidas frías y recetas de autor.",
};

export default function CafeteriaPage() {
  const cafeteriaCategories = [...menuCategoryGroups.cafeteria];

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Especialidad"
        title="Cafetería"
        description="Bebidas calientes y frías preparadas por baristas, con granos seleccionados y perfil de sabor definido."
      />
      <ProductCatalog
        initialCategory={cafeteriaCategories[0] ?? "all"}
        allowedCategories={cafeteriaCategories}
      />
    </div>
  );
}
