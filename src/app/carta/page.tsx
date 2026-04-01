import type { Metadata } from "next";

import { ProductCatalog } from "@/components/catalog/product-catalog";
import { PageHeader } from "@/components/sections/page-header";

export const metadata: Metadata = {
  title: "Carta",
  description: "Carta completa de cafetería, tortas y productos Zurys.",
};

export default function CartaPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Menú Premium"
        title="Carta Zurys"
        description="Explora nuestras categorías, filtra y encuentra el producto ideal para cada momento."
      />
      <ProductCatalog />
    </div>
  );
}
