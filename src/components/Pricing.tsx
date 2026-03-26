"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Gratis",
    period: "30 dias",
    description: "Ideal para probar sin compromiso.",
    features: ["Hasta 10 mesas", "Menu digital ilimitado", "QR por mesa", "Pedidos en tiempo real", "1 usuario admin"],
    cta: "Empezar gratis",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$50.000",
    period: "/mes",
    description: "Para restaurantes en operacion.",
    features: ["Mesas ilimitadas", "Todo de Starter", "Split bill", "MercadoPago integrado", "Kanban cocina/barra", "Staff management", "Analytics", "Soporte prioritario"],
    cta: "Elegir Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Multi-sucursal y franquicias.",
    features: ["Todo de Pro", "Multi-tenant", "API access", "White-label", "SLA garantizado", "Account manager dedicado"],
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
        <div className="mt-20 grid items-center gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 ${plan.highlighted ? "border-violet-glow/40 bg-bg-dark glow-violet scale-105" : "border-white/5 bg-bg-card"}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full gradient-violet px-4 py-1 text-xs font-bold text-white">
                  Mas popular
                </div>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-text-muted">{plan.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-text-muted">{plan.period}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 flex-shrink-0 text-violet-glow" />
                    <span className="text-text-secondary">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
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
