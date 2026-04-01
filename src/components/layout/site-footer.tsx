import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground sm:px-6 lg:px-8">
        <p className="font-medium text-foreground">{siteConfig.fullName}</p>
        <p>{siteConfig.address}</p>
        <p>
          Contact: {siteConfig.email} · {siteConfig.phone}
        </p>
      </div>
    </footer>
  );
}
