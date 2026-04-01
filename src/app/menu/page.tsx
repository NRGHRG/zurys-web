import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore Zurys signature drinks, pastries, and house specials.",
};

const menuSections = [
  {
    title: "Espresso Bar",
    items: ["Espresso", "Cappuccino", "Flat White", "Mocha"],
  },
  {
    title: "Filter & Cold",
    items: ["V60 Pour Over", "Batch Brew", "Cold Brew", "Iced Latte"],
  },
  {
    title: "Bakery",
    items: ["Butter Croissant", "Pain au Chocolat", "Carrot Cake", "Cookie"],
  },
];

export default function MenuPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Coffee & Food"
        title="Our Menu"
        description="Seasonal coffee offerings and fresh bakery options prepared throughout the day."
      />

      <section className="grid gap-4 md:grid-cols-3">
        {menuSections.map((section) => (
          <Card key={section.title}>
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </section>
    </div>
  );
}
