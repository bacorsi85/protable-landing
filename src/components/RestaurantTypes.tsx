"use client";
import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, Wine, Building2 } from "lucide-react";

const types = [
  { icon: Coffee, name: "Bares y cafeterías", description: "Pedidos rápidos, menú simple, alta rotación. ProTable agiliza el servicio sin mozos extra." },
  { icon: UtensilsCrossed, name: "Restaurantes casual", description: "Menú completo con modificaciones, alérgenos y split bill. La experiencia completa." },
  { icon: Wine, name: "Fine dining", description: "Carta de vinos digital, maridajes sugeridos, cuenta discreta. Elegancia sin fricciones." },
  { icon: Building2, name: "Food courts y patios", description: "Múltiples locales, un solo QR por mesa. El cliente pide de varios locales en un carrito." },
];

export default function RestaurantTypes() {
  return (
    <section id="restaurants" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            ¿Para qué tipo de restaurante{" "}
            <span className="gradient-text-violet">sirve?</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            ProTable se adapta a cualquier formato gastronómico.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {types.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group flex gap-6 rounded-2xl border border-white/5 bg-bg-card p-8 transition-all hover:border-violet-glow/20"
            >
              <div className="flex-shrink-0 rounded-xl bg-violet-glow/10 p-4 transition-all group-hover:bg-violet-glow/20">
                <t.icon className="h-8 w-8 text-violet-glow" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="mt-2 text-text-secondary">{t.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
