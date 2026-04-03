"use client";
import { motion } from "framer-motion";
import { Settings, QrCode, Smartphone, ChefHat } from "lucide-react";

const steps = [
  { number: "01", icon: Settings, title: "Configurá tu restaurante", description: "Cargá tu menú, personalizá colores y logo. En minutos tenés todo listo." },
  { number: "02", icon: QrCode, title: "Imprimí los QR", description: "Cada mesa tiene su código QR único. El cliente lo escanea con la cámara." },
  { number: "03", icon: Smartphone, title: "El cliente pide solo", description: "Menú digital en el celular. Elige, personaliza y confirma. Sin descargar nada." },
  { number: "04", icon: ChefHat, title: "Cocina recibe, cliente paga", description: "El pedido llega automáticamente. El cliente paga con MercadoPago o efectivo." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <h2 className="font-[family-name:var(--font-family-display)] text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Cómo funciona</h2>
          <p className="text-slate-500 text-lg">De cero a pedidos en 4 pasos</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative text-center">
              <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-lg font-bold">{step.number}</div>
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="mx-auto mb-4 w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
