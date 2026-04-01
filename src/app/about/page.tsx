import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description: "Learn the story and values behind Zurys Coffee Shop.",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Our Story"
        title="About Zurys"
        description="Born from a passion for coffee craftsmanship and meaningful community spaces."
      />

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <h2 className="text-lg font-semibold">Mission</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Serve exceptional coffee experiences with consistency and care.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Vision</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Become the favorite neighborhood coffee destination in Santiago.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Values</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Quality, warmth, transparency, and respect for producers.
          </p>
        </Card>
      </section>
    </div>
  );
}
