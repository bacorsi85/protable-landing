"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Qué necesita el restaurante para empezar?", a: "Solo una conexión a internet y un dispositivo (tablet, notebook o celular) para ver los pedidos. Los clientes usan su propio celular para escanear el QR. No necesitás comprar hardware." },
  { q: "El cliente necesita descargar una app?", a: "No. El cliente escanea el QR y entra directo a la carta desde el navegador de su celular. Sin descargas, sin registros." },
  { q: "Cómo funcionan los pagos?", a: "El restaurante conecta su cuenta de MercadoPago en 3 clicks. Los pagos van directo a tu cuenta. ProTable nunca toca la plata. También podés usar solo efectivo." },
  { q: "Es seguro pagar desde el celular?", a: "Sí. Los pagos se procesan 100% a través de MercadoPago, que cuenta con certificación PCI DSS. ProTable nunca ve ni almacena datos de tarjetas. Tu cliente paga con la misma seguridad que en cualquier comercio online." },
  { q: "Cuánto cuesta ProTable?", a: "Desde $15.000/mes con 30 días de prueba gratis. Sin comisión sobre ventas, sin contratos largos. Cancelás cuando quieras. Todos los planes incluyen MercadoPago integrado e impresión en cocina." },
  { q: "Cómo recibo la plata de las ventas?", a: "Directo en tu cuenta de MercadoPago, como cualquier otra venta. ProTable no intermedia ni retiene fondos. Vos controlás tu plata desde tu propia cuenta." },
  { q: "Qué pasa con las propinas?", a: "Los clientes pueden dejar propina digital al momento de pagar. Se registra por separado para que tus mozos la reciban. Transparente para el local y para el staff." },
  { q: "Puedo personalizar el menú y los colores?", a: "Sí. Logo, colores, fotos de platos, descripciones, alérgenos. Tu cliente ve la identidad de tu local, no la de un tercero. 100% white-label." },
  { q: "Esto reemplaza a mis mozos?", a: "No. ProTable libera a tu staff de tomar pedidos para que se enfoquen en la atención y la experiencia. Menos errores, más eficiencia." },
  { q: "Puedo usar ProTable junto con mi POS actual?", a: "Sí. ProTable no reemplaza tu POS, lo complementa. Los pedidos entran por ProTable y tu cocina los recibe en el Kanban. Podés seguir usando tu sistema de facturación." },
  { q: "Qué datos puedo ver de mi negocio?", a: "Dashboard en tiempo real con ventas del día, ticket promedio, items más vendidos y horarios pico. Exportá reportes para tu contador o para tomar decisiones de negocio." },
  { q: "Qué soporte tienen?", a: "Soporte por email y WhatsApp. Además, el dashboard tiene un Centro de Ayuda integrado con guías paso a paso para cada funcionalidad. Plan Pro incluye soporte prioritario." },
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
