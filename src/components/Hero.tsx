"use client";
import { motion } from "framer-motion";
import { QrCode, ShoppingBag, MapPin, DollarSign, ShieldCheck, ArrowRight } from "lucide-react";
import { signupUrl } from "@/lib/urls";

export default function Hero() {
  return (
    <section className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-xl">
            <p className="text-emerald-500 font-semibold text-sm tracking-wide uppercase mb-4">Sistema de mesa digital</p>
            <h1 className="font-[family-name:var(--font-family-display)] text-4xl sm:text-5xl lg:text-[3.4rem] leading-tight font-bold text-slate-900 mb-6">
              La mesa no espera.{" "}
              <span className="text-emerald-500">El mozo no corre.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-2 leading-relaxed">
              Más rotación, menos errores, más ventas. Tus clientes piden y pagan desde el celular.
            </p>
            <div className="flex items-center gap-3 mb-8">
              <p className="text-emerald-600 italic text-base">Tu marca, tu experiencia.</p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-xs font-semibold text-sky-700">
                <ShieldCheck className="w-3.5 h-3.5" />
                Mercado Pago integrado
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={signupUrl()}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold px-6 py-3.5 text-base transition-all hover:scale-[1.02] group"
              >
                Crear cuenta gratis
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold px-6 py-3.5 text-base transition-colors"
              >
                Ver cómo funciona
              </a>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              30 días gratis · Sin tarjeta · Operativo al instante
            </p>
          </motion.div>

          <div className="relative hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50" />
            <div className="relative w-64 h-[480px] rounded-[2.5rem] border-[6px] border-slate-800 bg-white shadow-2xl flex flex-col items-center overflow-hidden">
              <div className="w-full h-8 bg-slate-800 flex items-center justify-center"><div className="w-20 h-4 rounded-full bg-slate-700" /></div>
              <div className="flex-1 w-full p-4 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-white to-emerald-50/40">
                <QrCode className="w-16 h-16 text-emerald-500 stroke-[1.5]" />
                <p className="text-xs text-slate-500 font-medium">Escaneá el QR de tu mesa</p>
                <div className="w-full space-y-2 mt-2">
                  <div className="bg-white rounded-lg border border-slate-100 p-2 flex items-center gap-2 shadow-sm">
                    <div className="w-8 h-8 rounded bg-amber-100 flex items-center justify-center"><ShoppingBag className="w-4 h-4 text-amber-600" /></div>
                    <div className="flex-1"><p className="text-[10px] font-semibold text-slate-700">Hamburguesa clásica</p><p className="text-[9px] text-slate-400">$4.500</p></div>
                  </div>
                  <div className="bg-white rounded-lg border border-slate-100 p-2 flex items-center gap-2 shadow-sm">
                    <div className="w-8 h-8 rounded bg-emerald-100 flex items-center justify-center"><ShoppingBag className="w-4 h-4 text-emerald-600" /></div>
                    <div className="flex-1"><p className="text-[10px] font-semibold text-slate-700">Ensalada Caesar</p><p className="text-[9px] text-slate-400">$3.200</p></div>
                  </div>
                </div>
                <div className="w-full bg-emerald-500 rounded-lg py-2 text-center mt-2"><p className="text-[11px] font-semibold text-white">Confirmar pedido</p></div>
              </div>
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-10 -left-2 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center"><ShoppingBag className="w-3.5 h-3.5 text-emerald-600" /></div>
              <span className="text-xs font-semibold text-slate-700">Pedido recibido</span>
            </motion.div>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute top-1/3 -right-4 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center"><MapPin className="w-3.5 h-3.5 text-blue-600" /></div>
              <span className="text-xs font-semibold text-slate-700">Mesa 5</span>
            </motion.div>
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3.5 }} className="absolute bottom-16 -left-4 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center"><DollarSign className="w-3.5 h-3.5 text-amber-600" /></div>
              <span className="text-xs font-semibold text-slate-700">$4.500</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
