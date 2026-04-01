import Link from "next/link";

import { siteConfig } from "@/config/site";

export function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Hola Zurys, quiero hacer un pedido / reserva."
  );
  const href = `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}&text=${message}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:opacity-95"
      aria-label="Hablar por WhatsApp"
    >
      WhatsApp
    </Link>
  );
}
