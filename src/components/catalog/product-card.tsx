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
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-2 p-5">
        <h3 className="text-lg font-semibold tracking-tight">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <p className="pt-1 text-base font-semibold text-primary">
          {formatCurrency(product.price)}
        </p>
      </div>
    </article>
  );
}
