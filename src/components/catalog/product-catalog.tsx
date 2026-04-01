"use client";

import { useMemo, useState } from "react";

import { ProductCard } from "@/components/catalog/product-card";
import {
  productCategories,
  products,
  type ProductCategory,
} from "@/lib/data/products";

type CatalogProps = {
  initialCategory?: ProductCategory | "all";
  featuredOnly?: boolean;
};

export function ProductCatalog({
  initialCategory = "all",
  featuredOnly = false,
}: CatalogProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProductCategory | "all">(initialCategory);

  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (featuredOnly && !product.featured) return false;
      if (category !== "all" && product.category !== category) return false;

      const normalizedQuery = query.trim().toLowerCase();
      if (!normalizedQuery) return true;

      return [product.name, product.description]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [category, featuredOnly, query]);

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar por producto o descripción"
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm md:max-w-md"
          aria-label="Buscar productos"
        />

        <div className="flex flex-wrap gap-2">
          {productCategories.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setCategory(item.value)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                category === item.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-md border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
          No encontramos productos para tu búsqueda.
        </p>
      ) : null}
    </section>
  );
}
