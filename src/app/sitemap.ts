import type { MetadataRoute } from "next";

const routes = [
  "",
  "/nosotros",
  "/carta",
  "/tortas-pasteleria",
  "/cafeteria",
  "/promociones",
  "/pedidos-reservas",
  "/contacto",
  "/preguntas-frecuentes",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://zurys.cl${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
