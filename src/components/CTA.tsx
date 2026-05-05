"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { signupUrl } from "@/lib/urls";

export default function CTA() {
  return (
    <section className="bg-slate-900 py-20 md:py-28">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          ¿Listo para <span className="text-emerald-400">transformar</span> tu restaurante?
        </h2>
        <p className="text-slate-400 text-lg mb-10">15 días gratis. Sin tarjeta. Sin contratos.</p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href={signupUrl()} className="inline-flex items-center gap-2 rounded-full bg-amber-400 hover:bg-amber-500 px-8 py-4 text-lg font-semibold text-slate-900 transition-all hover:scale-105 group">
            Empezá gratis <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="/#how-it-works" className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-slate-400">
            Ver cómo funciona
          </a>
        </div>
      </motion.div>
    </section>
  );
}
