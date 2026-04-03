"use client";
import { motion } from "framer-motion";
import { QrCode, Scissors, CreditCard, Paintbrush, Printer, BarChart3 } from "lucide-react";

const features = [
  { icon: QrCode, title: "QR sin descargas", description: "El cliente escanea y entra directo a la carta. Sin apps, sin registro, sin fricciones." },
  { icon: Scissors, title: "Split bill nativo", description: "Division de cuenta en 3 modos: partes iguales, por item o monto personalizado. Ningun POS lo tiene." },
  { icon: CreditCard, title: "MercadoPago integrado", description: "Cobro directo con QR dinamico. OAuth per-tenant, sin intermediarios." },
  { icon: Paintbrush, title: "100% tu marca", description: "Logo, colores y tipografia de tu restaurante. El cliente nunca ve \"ProTable\"." },
  { icon: Printer, title: "Impresion automatica", description: "Las comandas van directo a la impresora de cocina y barra. Sin intervencion humana." },
  { icon: BarChart3, title: "Analytics en tiempo real", description: "Platos mas vendidos, tiempos de preparacion, revenue por mesa. Data para decidir." },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <h2 className="font-[family-name:var(--font-family-display)] text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Todo lo que necesitas</h2>
          <p className="text-slate-500 text-lg">Features que marcan la diferencia</p>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div key={f.title} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
