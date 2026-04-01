import type { Metadata } from "next";

import { ProductCatalog } from "@/components/catalog/product-catalog";
import { PageHeader } from "@/components/sections/page-header";
import { menuCategoryGroups } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Tortas y Pastelería",
  description: "Tortas artesanales y pastelería premium de Zurys.",
};

export default function TortasPasteleriaPage() {
  const tortasPasteleriaCategories = [...menuCategoryGroups["tortas-pasteleria"]];

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Pastelería"
        title="Tortas y Pastelería"
        description="Diseños elegantes, sabores equilibrados y presentación de alto nivel para tus celebraciones."
      />
      <ProductCatalog
        initialCategory={tortasPasteleriaCategories[0] ?? "all"}
        allowedCategories={tortasPasteleriaCategories}
      />
    </div>
  );
}
