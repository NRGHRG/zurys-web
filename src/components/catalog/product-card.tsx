import Image from "next/image";

import type { Product } from "@/lib/data/products";
import { formatCurrency } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-background">
      <div className="relative h-52 w-full overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-muted text-sm text-muted-foreground">
            Imagen no disponible
          </div>
        )}
      </div>
      <div className="space-y-2 p-5">
        <h3 className="text-lg font-semibold tracking-tight">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <div className="flex items-center justify-between gap-2 pt-1">
          <p className="text-base font-semibold text-primary">{formatCurrency(product.price)}</p>
          {!product.isAvailable ? (
            <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
              No disponible
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
