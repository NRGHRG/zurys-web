import type { Metadata } from "next";

import { ProductCatalog } from "@/components/catalog/product-catalog";
import { PageHeader } from "@/components/sections/page-header";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore Zurys signature drinks, pastries, and house specials.",
};

export default function MenuPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Coffee & Food"
        title="Our Menu"
        description="Seasonal coffee offerings and fresh bakery options prepared throughout the day."
      />
      <ProductCatalog />
    </div>
  );
}
