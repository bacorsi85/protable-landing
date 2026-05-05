"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { signupUrl } from "@/lib/urls";

const plans = [
  {
    name: "Starter",
    href: signupUrl("starter"),
    price: "$15.000",
    period: "/mes",
    priceNote: null,
    trial: "30 días gratis",
    description: "Ideal para empezar a digitalizar tu restaurante.",
    features: [
      "Menú QR y Pedidos",
      "Hasta 10 mesas",
      "Pedidos para Llevar",
      "Métricas y Reportes",
      "MercadoPago integrado",
      "Impresión automática en cocina/barra",
      "Gestión de staff (hasta 5 usuarios)",
      "Soporte por email",
      "Sin comisión sobre ventas",
    ],
    cta: "Empezá gratis",
    highlighted: false,
  },
  {
    name: "Pro",
    href: signupUrl("pro"),
    price: "$25.000",
    period: "/mes",
    priceNote: null,
    trial: "7 días gratis",
    description: "Para restaurantes en operación que quieren escalar.",
    features: [
      "Menú QR y Pedidos",
      "Mesas ilimitadas",
      "Modo Walk-in",
      "Pedidos para Llevar",
      "Métricas y Reportes",
      "Notificaciones WhatsApp",
      "Facturación ARCA/AFIP",
      "Staff ilimitado",
      "Kanban cocina/barra avanzado",
      "Split bill",
      "Soporte prioritario",
      "Sin comisión sobre ventas",
    ],
    cta: "Elegí Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    href: "/contacto",
    price: "Custom",
    period: "",
    priceNote: null,
    trial: null,
    description: "Multi-sucursal y franquicias.",
    features: [
      "Menú QR y Pedidos",
      "Modo Walk-in",
      "Pedidos para Llevar",
      "Métricas y Reportes",
      "Notificaciones WhatsApp",
      "Facturación ARCA/AFIP",
      "Multi-sucursal",
      "Acceso a API",
      "White-label completo",
      "SLA garantizado",
      "Account manager dedicado",
      "Comisión negociable",
    ],
    cta: "Contactar ventas",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-family-display)] text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Precios simples
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Sin sorpresas. Sin contratos largos. Cancelá cuando quieras.
          </p>
        </div>

        {/* 50% OFF banner */}
        <div className="flex justify-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-6 py-2.5"
          >
            <span className="text-sm font-bold text-red-500 animate-pulse">50% OFF por tiempo limitado en todos los planes</span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-6 lg:p-8 flex flex-col overflow-hidden ${
                plan.highlighted
                  ? "ring-2 ring-emerald-500 border-emerald-500 shadow-xl md:scale-105 bg-white"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {/* Diagonal 50% OFF ribbon */}
              <div className="absolute -right-12 top-6 rotate-45 bg-red-500 text-white text-[11px] font-bold py-1.5 px-14 shadow-lg z-10 tracking-wider">
                50% OFF
              </div>

              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold text-white z-20">
                  Más popular
                </span>
              )}

              {/* Badge */}
              <span className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
                plan.highlighted ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"
              }`}>
                {plan.name === "Starter" ? "Ideal para empezar" : plan.name === "Enterprise" ? "Multi-local" : ""}
              </span>

              <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>

              <div className="flex items-baseline gap-1.5 mb-0.5">
                <p className="text-3xl font-bold text-slate-900">{plan.price}</p>
                <span className="text-slate-500">{plan.period}</span>
                {plan.priceNote && <span className="text-sm text-slate-400">{plan.priceNote}</span>}
              </div>

              <p className="text-sm text-slate-400 mb-6">{plan.features[plan.features.length - 1]}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.slice(0, -1).map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`w-full block text-center rounded-lg py-3 font-semibold transition-all hover:scale-[1.02] ${
                  plan.highlighted
                    ? "bg-amber-400 hover:bg-amber-500 text-slate-900"
                    : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {plan.cta}
              </a>

              {plan.trial && (
                <p className="text-xs text-emerald-500 text-center mt-3">{plan.trial}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
