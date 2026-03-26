"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Que necesita el restaurante para empezar?", a: "Solo una conexion a internet y un dispositivo (tablet, notebook o celular) para ver los pedidos. Los clientes usan su propio celular para escanear el QR y pedir." },
  { q: "El menu digital se puede personalizar?", a: "Si. Podes agregar logo, colores del restaurante, fotos de platos, descripciones, alergenos, y organizar por categorias. Todo desde el panel admin sin tocar codigo." },
  { q: "Se pueden pausar productos sin tocar el front?", a: "Si. Desde el panel admin podes marcar productos como no disponibles y se ocultan automaticamente del menu digital en tiempo real." },
  { q: "Como funciona el pago con MercadoPago?", a: "El restaurante conecta su cuenta de MercadoPago via OAuth (3 clicks). Los pagos van directo a la cuenta del restaurante. ProTable nunca toca la plata." },
  { q: "Necesitan instalar una app los clientes?", a: "No. ProTable funciona como PWA desde el navegador del celular. El cliente escanea el QR y listo, sin descargas ni registros." },
  { q: "Puedo usar ProTable solo con efectivo?", a: "Si. Existe un modo solo efectivo donde los clientes ven el menu y hacen pedidos, pero pagan al mozo. Podes activar MercadoPago despues." },
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
