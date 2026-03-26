import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://protable.io"),
  title: {
    default: "ProTable - Sistema de pedidos QR para restaurantes",
    template: "%s | ProTable",
  },
  description:
    "Menú digital y sistema de pedidos QR para restaurantes. Reduce tiempos de espera, mejora la gestión y aumenta la rotación de mesas. Sin app, sin hardware.",
  keywords: [
    "sistema pedidos QR",
    "menú digital restaurante",
    "pedidos desde mesa",
    "carta digital QR",
    "gestión restaurantes",
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
      "Menú digital y pedidos QR. Sin app, sin hardware. Aumentá la rotación de mesas y reducí errores.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ProTable - Sistema de pedidos QR" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProTable - Sistema de pedidos QR para restaurantes",
    description: "Menú digital y pedidos QR. Sin app, sin hardware.",
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "ProTable",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description: "Sistema de pedidos QR para restaurantes con menú digital, split bill y gestión centralizada.",
              offers: { "@type": "Offer", price: 0, priceCurrency: "ARS" },
              url: "https://protable.io",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es un sistema de pedidos QR para restaurantes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es una solución donde el cliente escanea un código QR en la mesa, abre el menú digital y realiza pedidos desde su celular sin necesidad de app.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Los clientes necesitan instalar una app?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. ProTable funciona como PWA desde el navegador del celular. El cliente escanea el QR y listo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Puedo actualizar el menú sin reimprimir cartas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Gestionás productos, precios y disponibilidad desde el panel admin y el menú se actualiza en tiempo real.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-bg-dark text-text-primary antialiased">{children}</body>
    </html>
  );
}
