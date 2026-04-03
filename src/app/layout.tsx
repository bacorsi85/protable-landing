import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://protable.io"),
  title: {
    default: "ProTable - Sistema de pedidos QR para restaurantes",
    template: "%s | ProTable",
  },
  description:
    "Menu digital y sistema de pedidos QR para restaurantes. Reduce tiempos de espera, mejora la gestion y aumenta la rotacion de mesas. Sin app, sin hardware.",
  keywords: [
    "sistema pedidos QR",
    "menu digital restaurante",
    "pedidos desde mesa",
    "carta digital QR",
    "gestion restaurantes",
    "split bill",
    "MercadoPago restaurante",
  ],
  authors: [{ name: "ProTable" }],
  creator: "ProTable",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://protable.io",
    siteName: "ProTable",
    title: "ProTable - Sistema de pedidos QR para restaurantes",
    description:
      "Menu digital y pedidos QR. Sin app, sin hardware. Aumenta la rotacion de mesas y reduci errores.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ProTable - Sistema de pedidos QR" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProTable - Sistema de pedidos QR para restaurantes",
    description: "Menu digital y pedidos QR. Sin app, sin hardware.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="canonical" href="https://protable.io" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "ProTable",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description: "Sistema de pedidos QR para restaurantes con menu digital, split bill y gestion centralizada.",
              offers: { "@type": "Offer", price: 0, priceCurrency: "ARS" },
              url: "https://protable.io",
            }),
          }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
