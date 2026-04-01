export type ProductCategory =
  | "cafeteria"
  | "tortas-pasteleria"
  | "sandwiches"
  | "promociones";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  featured?: boolean;
};

export const productCategories: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "cafeteria", label: "Cafetería" },
  { value: "tortas-pasteleria", label: "Tortas y Pastelería" },
  { value: "sandwiches", label: "Sandwiches" },
  { value: "promociones", label: "Promociones" },
];

export const products: Product[] = [
  {
    id: "latte-vainilla",
    name: "Latte Vainilla",
    description: "Espresso doble, leche texturizada y vainilla natural.",
    price: 3900,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    category: "cafeteria",
    featured: true,
  },
  {
    id: "cold-brew",
    name: "Cold Brew Citrus",
    description: "Extracción en frío por 18 horas con toque cítrico.",
    price: 4200,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80",
    category: "cafeteria",
  },
  {
    id: "torta-pistacho",
    name: "Torta Pistacho Premium",
    description: "Bizcocho húmedo, crema de pistacho y cobertura suave.",
    price: 32900,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
    category: "tortas-pasteleria",
    featured: true,
  },
  {
    id: "tarta-frutas",
    name: "Tarta Frutas Estación",
    description: "Masa sablé, crema pastelera y fruta fresca seleccionada.",
    price: 28900,
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    category: "tortas-pasteleria",
  },
  {
    id: "croissant-jamon-queso",
    name: "Croissant Jamón & Queso",
    description: "Hojaldre mantequillado relleno con jamón ahumado y queso.",
    price: 4900,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    category: "sandwiches",
  },
  {
    id: "brunch-zurys",
    name: "Brunch Zurys",
    description: "2 cafés + 2 croissants + mini torta del día.",
    price: 14900,
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80",
    category: "promociones",
    featured: true,
  },
];

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
