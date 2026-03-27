"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#features", label: "Funcionalidades" },
  { href: "#how-it-works", label: "Cómo funciona" },
  { href: "#restaurants", label: "Restaurantes" },
  { href: "#pricing", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-bg-dark/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-black tracking-tight">
          Pro<span className="gradient-text-violet">Table</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-text-secondary transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
          <a
            href="/contacto"
            className="gradient-violet glow-violet-sm rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105"
          >
            Probá gratis
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-bg-dark/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-text-secondary hover:text-white">
                  {l.label}
                </a>
              ))}
              <a href="/contacto" className="gradient-violet rounded-full px-6 py-3 text-center font-semibold text-white">
                Probá gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
