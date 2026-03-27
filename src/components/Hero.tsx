"use client";
import { motion } from "framer-motion";
import { ArrowRight, QrCode, Smartphone, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-grid pt-24">
      {/* Violet glow orbs */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
        <div className="h-[600px] w-[600px] rounded-full bg-violet-glow/10 blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute right-0 top-1/3">
        <div className="h-[400px] w-[400px] rounded-full bg-violet-deep/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-glow/20 bg-violet-glow/5 px-4 py-2 text-sm text-violet-light"
          >
            <Zap className="h-4 w-4" />
            <span>Sin descargas · Sin hardware extra · Sin fricciones</span>
          </motion.div>

          {/* H1 - SEO optimized */}
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-8xl">
            Sistema de pedidos{" "}
            <span className="gradient-text-violet">QR</span>
            <br />
            para restaurantes
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-text-secondary md:text-xl">
            Menú digital y pedidos en mesa. Reducí tiempos de espera, eliminá errores
            y aumentá la rotación de mesas. Todo desde el celular del cliente.
          </p>

          {/* White-label callout */}
          <p className="mx-auto mt-4 max-w-xl text-sm text-violet-light/80">
            Tu marca, tu experiencia. El cliente ve tu logo, tus colores y tu identidad. Sin marcas de terceros.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contacto"
              className="gradient-violet glow-violet group inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105"
            >
              Probá gratis 15 días
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-violet-glow/30 hover:bg-white/5"
            >
              Ver cómo funciona
            </a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-8 border-t border-white/5 pt-10"
          >
            {[
              { value: "3x", label: "Más rotación de mesas" },
              { value: "0%", label: "Errores de pedido" },
              { value: "30s", label: "Setup por mesa" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black gradient-text-violet md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating icons */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute left-10 top-1/3 hidden rounded-2xl border border-white/5 bg-bg-card p-4 shadow-2xl lg:block"
        >
          <QrCode className="h-8 w-8 text-violet-glow" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute right-10 top-1/2 hidden rounded-2xl border border-white/5 bg-bg-card p-4 shadow-2xl lg:block"
        >
          <Smartphone className="h-8 w-8 text-violet-light" />
        </motion.div>
      </div>
    </section>
  );
}
