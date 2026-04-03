"use client";
import { motion } from "framer-motion";
import { UtensilsCrossed, Coffee, ClipboardList, PartyPopper } from "lucide-react";

const types = [
  { icon: UtensilsCrossed, name: "Restaurantes", description: "Menú completo, pedidos en mesa, split bill, tracking en tiempo real." },
  { icon: Coffee, name: "Bares y cafeterías", description: "Pedidos rápidos, carta de tragos, turnos de alta demanda sin fricciones." },
  { icon: ClipboardList, name: "Take away y delivery", description: "Walk-in mode: pedidos sin mesa para panaderías, kioscos y food trucks." },
  { icon: PartyPopper, name: "Eventos y recreación", description: "Cable parks, playas, festivales. Pedidos desde la reposera." },
];

export default function RestaurantTypes() {
  return (
    <section id="restaurants" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <h2 className="font-[family-name:var(--font-family-display)] text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Se adapta a tu formato</h2>
          <p className="text-slate-500 text-lg">Cualquier tipo de gastronomía</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {types.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-emerald-500">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5"><t.icon className="w-6 h-6 text-emerald-500" /></div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{t.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{t.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
