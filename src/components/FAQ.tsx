"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "¿Qué necesita el restaurante para empezar?", a: "Solo una conexión a internet y un dispositivo (tablet, notebook o celular) para ver los pedidos en cocina y barra. Los clientes usan su propio celular para escanear el QR y pedir. No necesitás comprar ningún hardware especial." },
  { q: "¿El menú digital se puede personalizar?", a: "Sí. Podés agregar el logo de tu restaurante, tus colores, fotos de platos, descripciones, alérgenos, y organizar por categorías. Tu cliente ve la identidad de tu local, no la de un tercero. Todo se configura desde el panel admin." },
  { q: "¿Puedo ocultar productos que no están disponibles?", a: "Sí. Desde el panel admin podés marcar productos como no disponibles y se ocultan automáticamente del menú digital en tiempo real. Sin tocar nada más." },
  { q: "¿Cómo funciona el pago con MercadoPago?", a: "El restaurante conecta su cuenta de MercadoPago en 3 clicks. Los pagos van directo a la cuenta del restaurante. ProTable nunca toca la plata." },
  { q: "¿El cliente necesita descargar algo?", a: "No. El cliente escanea el QR y entra directo a la carta de tu restaurante desde el navegador de su celular. Sin descargas, sin registros, sin fricciones." },
  { q: "¿Puedo usar ProTable solo con efectivo?", a: "Sí. Existe un modo solo efectivo donde los clientes ven el menú y hacen pedidos, pero pagan al mozo. Podés activar MercadoPago cuando quieras." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-32">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-4xl font-black tracking-tight md:text-5xl">
          Preguntas <span className="gradient-text-violet">frecuentes</span>
        </h2>
        <div className="mt-16 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-bg-card">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between p-6 text-left">
                <h3 className="text-lg font-semibold pr-4">{faq.q}</h3>
                <ChevronDown className={`h-5 w-5 flex-shrink-0 text-violet-glow transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="px-6 pb-6 text-text-secondary">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
