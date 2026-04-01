import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zurys | Cafetería y Pastelería Premium",
    template: "%s | Zurys",
  },
  description:
    "Zurys en Maipú: cafetería y pastelería premium con café de especialidad, tortas artesanales y atención cálida.",
  metadataBase: new URL("https://zurys.cl"),
  applicationName: "Zurys",
  keywords: [
    "cafetería maipú",
    "pastelería maipú",
    "tortas artesanales",
    "café de especialidad",
    "Zurys",
  ],
  openGraph: {
    title: "Zurys | Cafetería y Pastelería Premium",
    description:
      "Café de especialidad, tortas artesanales y una experiencia gastronómica elegante en Maipú.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
