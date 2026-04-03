"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49.999",
    period: "/mes",
    priceNote: "+IVA",
    trial: "15 dias gratis",
    description: "Ideal para empezar a digitalizar tu restaurante.",
    features: [
      "Hasta 10 mesas",
      "Menu digital ilimitado",
      "QR por mesa",
      "Pedidos en tiempo real",
      "MercadoPago integrado",
      "Impresion automatica en cocina/barra",
      "Staff management (hasta 5 usuarios)",
      "Analytics basico",
      "Soporte por email",
      "Comision 5% sobre ventas procesadas",
    ],
    cta: "Empezar gratis",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$79.000",
    period: "/mes",
    priceNote: "+IVA",
    trial: "15 dias gratis",
    description: "Para restaurantes en operacion que quieren escalar.",
    features: [
      "Mesas ilimitadas",
      "Todo de Starter +",
      "Split bill",
      "Kanban cocina/barra avanzado",
      "Staff ilimitado",
      "Analytics avanzado",
      "Notificaciones por WhatsApp",
      "Integracion con AFIP (facturacion electronica)",
      "Walk-in: el cliente pide desde cualquier lugar escaneando un QR unico, ideal para take away, mostrador o eventos",
      "Soporte prioritario",
      "Comision 3% sobre ventas procesadas",
    ],
    cta: "Elegir Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    priceNote: null,
    trial: null,
    description: "Multi-sucursal y franquicias.",
    features: [
      "Todo de Pro +",
      "Multi-tenant",
      "API access",
      "White-label completo",
      "SLA garantizado",
      "Account manager dedicado",
      "Comision negociable",
    ],
    cta: "Contactar ventas",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-bg-section py-32">
      <div className="pointer-events-none absolute right-0 top-0">
        <div className="h-[400px] w-[400px] rounded-full bg-violet-glow/5 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Precios <span className="gradient-text-violet">simples</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary">Sin sorpresas. Sin contratos largos. Cancela cuando quieras.</p>
        </div>

        {/* Limited time promo banner */}
        <div className="mt-10 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2.5"
          >
            <span className="text-sm font-bold text-red-400 animate-pulse">🔥 50% OFF por tiempo limitado en todos los planes</span>
          </motion.div>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 overflow-hidden ${plan.highlighted ? "border-violet-glow/40 bg-bg-dark glow-violet scale-105" : "border-white/5 bg-bg-card"}`}
            >
              {/* Diagonal 50% OFF ribbon */}
              <div className="absolute -right-12 top-6 rotate-45 bg-red-500 text-white text-[11px] font-bold py-1.5 px-14 shadow-lg z-10 tracking-wider">
                50% OFF
              </div>

              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full gradient-violet px-4 py-1 text-xs font-bold text-white z-20">
                  Mas popular
                </div>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-text-muted">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-text-muted">{plan.period}</span>
                {plan.priceNote && (
                  <span className="text-sm text-text-muted">{plan.priceNote}</span>
                )}
              </div>
              {plan.trial && (
                <div className="mt-2 inline-block rounded-full bg-violet-glow/10 px-3 py-1 text-xs font-semibold text-violet-light">
                  {plan.trial}
                </div>
              )}
              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 flex-shrink-0 text-violet-glow mt-0.5" />
                    <span className="text-text-secondary">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contacto"
                className={`mt-8 block rounded-full py-3 text-center font-semibold transition-all hover:scale-105 ${plan.highlighted ? "gradient-violet text-white glow-violet-sm" : "border border-white/10 text-white hover:border-violet-glow/30"}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
