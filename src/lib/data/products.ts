import menuData from "@/data/zurys_menu.json";

export type ProductCategory = string;

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string | null;
  category: ProductCategory;
  categoryLabel: string;
  isAvailable: boolean;
  featured?: boolean;
};

type MenuCategory = {
  id: number | string;
  name: string;
  position?: number;
  products?: MenuProduct[];
};

type MenuProduct = {
  id: number | string;
  name: string;
  description: string | null;
  price?: number;
  pricePickup?: number;
  priceDelivery?: number;
  isAvailable?: boolean;
  image: string | null;
};

type MenuData = {
  categories?: MenuCategory[];
};

type CategoryOption = {
  value: ProductCategory;
  label: string;
  position: number;
};

const FALLBACK_DESCRIPTION = "Deliciosa preparación de Zurys.";
const MAX_FEATURED_PRODUCTS = 6;

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}+/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function toSafePrice(product: MenuProduct) {
  return Number(product.price ?? product.pricePickup ?? product.priceDelivery ?? 0);
}

const rawCategories = ((menuData as MenuData).categories ?? []).filter(
  (category) => Array.isArray(category.products) && category.products.length > 0,
);

const categorySlugUsage = new Map<string, number>();

const categoryOptions: CategoryOption[] = rawCategories
  .map((category) => {
    const baseSlug = slugify(category.name) || `categoria-${String(category.id)}`;
    const usageCount = categorySlugUsage.get(baseSlug) ?? 0;

    categorySlugUsage.set(baseSlug, usageCount + 1);

    const slug = usageCount === 0 ? baseSlug : `${baseSlug}-${usageCount + 1}`;

    return {
      value: slug,
      label: category.name.trim(),
      position: Number(category.position ?? 0),
    };
  })
  .sort((a, b) => a.position - b.position);

const categoryLabelBySlug = new Map(
  categoryOptions.map((category) => [category.value, category.label]),
);

function findCategorySlugByLabel(label: string) {
  const normalizedLabel = slugify(label);

  return categoryOptions.find((category) => slugify(category.label) === normalizedLabel)?.value;
}

export const menuCategoryGroups = {
  cafeteria: [findCategorySlugByLabel("Bebidas Caliente"), findCategorySlugByLabel("Bebidas Frias")].filter(
    (category): category is ProductCategory => Boolean(category),
  ),
  "tortas-pasteleria": [
    findCategorySlugByLabel("Pasteleria"),
    findCategorySlugByLabel("Sin Gluten/Veganos"),
  ].filter((category): category is ProductCategory => Boolean(category)),
  promociones: [findCategorySlugByLabel("Combos")].filter(
    (category): category is ProductCategory => Boolean(category),
  ),
  sandwiches: [findCategorySlugByLabel("Salados")].filter(
    (category): category is ProductCategory => Boolean(category),
  ),
} as const;

const flattenedProducts = rawCategories.flatMap((category) => {
  const categorySlug = categoryOptions.find((option) => option.label === category.name)?.value;

  if (!categorySlug) {
    return [];
  }

  return (category.products ?? []).map((product) => ({
    id: String(product.id),
    name: product.name,
    description:
      typeof product.description === "string" && product.description.trim().length > 0
        ? product.description
        : FALLBACK_DESCRIPTION,
    price: toSafePrice(product),
    image:
      typeof product.image === "string" && product.image.trim().length > 0
        ? product.image
        : null,
    category: categorySlug,
    categoryLabel: categoryLabelBySlug.get(categorySlug) ?? category.name,
    isAvailable: product.isAvailable !== false,
  }));
});

const preferredFeaturedCategories = [
  findCategorySlugByLabel("Combos"),
  findCategorySlugByLabel("Pasteleria"),
  findCategorySlugByLabel("Bebidas Caliente"),
  findCategorySlugByLabel("Bebidas Frias"),
  findCategorySlugByLabel("Salados"),
  findCategorySlugByLabel("Sin Gluten/Veganos"),
].filter((category): category is ProductCategory => Boolean(category));

const featuredProductIds = new Set<string>();

for (const category of preferredFeaturedCategories) {
  const candidate = flattenedProducts.find(
    (product) => product.category === category && product.image && product.isAvailable,
  );

  if (candidate) {
    featuredProductIds.add(candidate.id);
  }

  if (featuredProductIds.size >= MAX_FEATURED_PRODUCTS) {
    break;
  }
}

if (featuredProductIds.size < MAX_FEATURED_PRODUCTS) {
  for (const product of flattenedProducts) {
    if (featuredProductIds.size >= MAX_FEATURED_PRODUCTS) {
      break;
    }

    if (product.image && product.isAvailable) {
      featuredProductIds.add(product.id);
    }
  }
}

if (featuredProductIds.size < MAX_FEATURED_PRODUCTS) {
  for (const product of flattenedProducts) {
    if (featuredProductIds.size >= MAX_FEATURED_PRODUCTS) {
      break;
    }

    if (product.isAvailable) {
      featuredProductIds.add(product.id);
    }
  }
}

export const products: Product[] = flattenedProducts.map((product) => ({
  ...product,
  featured: featuredProductIds.has(product.id),
}));

export const productCategories: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  ...categoryOptions.map((category) => ({
    value: category.value,
    label: category.label,
  })),
];

export const menuCategories = categoryOptions.map((category) => ({
  value: category.value,
  label: category.label,
  productCount: products.filter((product) => product.category === category.value).length,
}));

export const testimonials = [
  {
    name: "Camila R.",
    quote:
      "La mejor experiencia de café en Maipú. El lugar se siente premium desde que entras.",
  },
  {
    name: "Felipe M.",
    quote:
      "Pedimos torta para cumpleaños y fue impecable en sabor y presentación.",
  },
  {
    name: "Valentina P.",
    quote:
      "Atención cálida, carta bien pensada y un diseño de marca muy elegante.",
  },
];

export const faqs = [
  {
    question: "¿Hacen pedidos personalizados de tortas?",
    answer:
      "Sí. Puedes solicitar tamaños, sabores y decoración. Recomendamos pedir con 48 horas de anticipación.",
  },
  {
    question: "¿Tienen opciones sin azúcar o sin lactosa?",
    answer:
      "Tenemos alternativas seleccionadas en cafetería y pastelería. Consulta disponibilidad al momento de pedir.",
  },
  {
    question: "¿Puedo reservar mesa para grupos?",
    answer:
      "Sí, aceptamos reservas para reuniones pequeñas y celebraciones. Escríbenos por WhatsApp o el formulario web.",
  },
];
