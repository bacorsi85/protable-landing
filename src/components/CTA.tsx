"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-bg-section py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-glow/10 blur-[150px]" />
      </div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-black tracking-tight md:text-6xl">
          Empezá con <span className="gradient-text-violet">ProTable</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-text-secondary">
          15 días gratis. Sin tarjeta. Sin contratos. Configurá tu restaurante en 10 minutos.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="/contacto" className="gradient-violet glow-violet group inline-flex items-center gap-2 rounded-full px-10 py-4 text-lg font-semibold text-white transition-all hover:scale-105">
            Empezá gratis
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#demo" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-10 py-4 text-lg font-semibold text-white transition-all hover:border-violet-glow/30">
            Ver demo
          </a>
        </div>
        <p className="mt-8 text-sm text-text-muted">¿Tenés dudas? Escribinos a contacto@protable.io</p>
      </motion.div>
    </section>
  );
}
