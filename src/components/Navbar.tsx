"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { signupUrl, loginUrl } from "@/lib/urls";

const links = [
  { href: "/#features", label: "Funcionalidades" },
  { href: "/#how-it-works", label: "Cómo funciona" },
  { href: "/#pricing", label: "Precios" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-black tracking-tight text-slate-900">
          Pro<span className="text-emerald-500">Table</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-500 transition-colors hover:text-slate-900">
              {l.label}
            </a>
          ))}
          <a href={loginUrl()} className="text-sm text-slate-500 transition-colors hover:text-slate-900">
            Iniciar sesión
          </a>
          <a href={signupUrl()} className="rounded-full bg-amber-400 hover:bg-amber-500 px-6 py-2.5 text-sm font-semibold text-slate-900 transition-all hover:scale-105">
            Probá gratis
          </a>
        </div>
        <button className="md:hidden text-slate-900" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-t border-slate-100 bg-white md:hidden">
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-600 hover:text-slate-900">{l.label}</a>
              ))}
              <a href={loginUrl()} onClick={() => setOpen(false)} className="text-center text-slate-600 hover:text-slate-900">Iniciar sesión</a>
              <a href={signupUrl()} className="rounded-full bg-amber-400 px-6 py-3 text-center font-semibold text-slate-900">Probá gratis</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
