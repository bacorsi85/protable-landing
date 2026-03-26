"use client";
import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Configurá tu restaurante", description: "Creá tu cuenta, subí el menú y configurá mesas en menos de 10 minutos.", color: "from-violet-glow to-violet-deep" },
  { number: "02", title: "Imprimí los QR", description: "Generá un QR único por mesa. Descargalo, imprimilo y pegalo en la mesa.", color: "from-violet-deep to-purple-900" },
  { number: "03", title: "El cliente escanea y pide", description: "El comensal abre la cámara, escanea el QR, ve el menú y hace su pedido.", color: "from-purple-900 to-violet-glow" },
  { number: "04", title: "Cocina recibe, cliente paga", description: "El pedido llega al Kanban de cocina. El cliente paga desde su celular con MercadoPago.", color: "from-violet-glow to-violet-light" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-bg-section py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Sistema de pedidos QR con{" "}
            <span className="gradient-text-violet">flujo optimizado</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            De cero a recibiendo pedidos en 4 pasos simples.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl border border-white/5 bg-bg-dark p-8"
            >
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-2xl font-black text-white`}>
                {step.number}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-text-secondary">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-gradient-to-r from-violet-glow/50 to-transparent lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
