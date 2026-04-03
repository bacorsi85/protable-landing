"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Que necesita el restaurante para empezar?", a: "Solo una conexion a internet y un dispositivo (tablet, notebook o celular) para ver los pedidos. Los clientes usan su propio celular para escanear el QR. No necesitas comprar hardware." },
  { q: "El cliente necesita descargar una app?", a: "No. El cliente escanea el QR y entra directo a la carta desde el navegador de su celular. Sin descargas, sin registros." },
  { q: "Como funcionan los pagos?", a: "El restaurante conecta su cuenta de MercadoPago en 3 clicks. Los pagos van directo a tu cuenta. ProTable nunca toca la plata. Tambien podes usar solo efectivo." },
  { q: "Puedo personalizar el menu y los colores?", a: "Si. Logo, colores, fotos de platos, descripciones, alergenos. Tu cliente ve la identidad de tu local, no la de un tercero. 100% white-label." },
  { q: "Esto reemplaza a mis mozos?", a: "No. ProTable libera a tu staff de tomar pedidos para que se enfoquen en la atencion y la experiencia. Menos errores, mas eficiencia." },
  { q: "Puedo usar ProTable junto con mi POS actual?", a: "Si. ProTable no reemplaza tu POS, lo complementa. Los pedidos entran por ProTable y tu cocina los recibe en el Kanban. Podes seguir usando tu sistema de facturacion." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-[family-name:var(--font-family-display)] text-3xl sm:text-4xl font-bold text-slate-900 mb-14">Preguntas frecuentes</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-slate-100 bg-white">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between p-5 text-left">
                <h3 className="text-base font-semibold text-slate-900 pr-4">{faq.q}</h3>
                <ChevronDown className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="px-5 pb-5 text-slate-500 leading-relaxed">{faq.a}</p>
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
