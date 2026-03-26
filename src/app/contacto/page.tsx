"use client";
import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactoPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: "", email: "", whatsapp: "", pagina: "", mensaje: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Send via mailto as fallback - in production use an API route
    const subject = encodeURIComponent(`Consulta de ${form.nombre} - ProTable`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}\nPagina: ${form.pagina}\n\nMensaje:\n${form.mensaje}`
    );
    window.location.href = `mailto:contacto@protable.io?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-dark pt-24">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-black tracking-tight md:text-5xl">
              <span className="gradient-text-violet">Contactanos</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Contanos sobre tu restaurante y te ayudamos a empezar.
            </p>
          </div>

          {sent ? (
            <div className="mt-16 rounded-2xl border border-violet-glow/20 bg-bg-card p-12 text-center">
              <CheckCircle2 className="mx-auto h-16 w-16 text-violet-glow" />
              <h2 className="mt-6 text-2xl font-bold">Consulta enviada</h2>
              <p className="mt-2 text-text-secondary">Te respondemos en menos de 24hs.</p>
              <a href="/" className="mt-8 inline-block rounded-full gradient-violet px-8 py-3 font-semibold text-white">
                Volver al inicio
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-16 space-y-6 rounded-2xl border border-white/5 bg-bg-card p-8">
              <div>
                <label htmlFor="nombre" className="mb-2 block text-sm font-medium">Nombre</label>
                <input
                  id="nombre" type="text" required value={form.nombre}
                  onChange={(e) => handleChange("nombre", e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-bg-dark px-4 py-3 text-white placeholder-text-muted focus:border-violet-glow focus:outline-none focus:ring-1 focus:ring-violet-glow"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
                <input
                  id="email" type="email" required value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-bg-dark px-4 py-3 text-white placeholder-text-muted focus:border-violet-glow focus:outline-none focus:ring-1 focus:ring-violet-glow"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium">WhatsApp</label>
                <input
                  id="whatsapp" type="tel" required value={form.whatsapp}
                  onChange={(e) => handleChange("whatsapp", e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-bg-dark px-4 py-3 text-white placeholder-text-muted focus:border-violet-glow focus:outline-none focus:ring-1 focus:ring-violet-glow"
                  placeholder="+54 11 1234-5678"
                />
              </div>
              <div>
                <label htmlFor="pagina" className="mb-2 block text-sm font-medium">Pagina del restaurante (Web o Instagram)</label>
                <input
                  id="pagina" type="text" value={form.pagina}
                  onChange={(e) => handleChange("pagina", e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-bg-dark px-4 py-3 text-white placeholder-text-muted focus:border-violet-glow focus:outline-none focus:ring-1 focus:ring-violet-glow"
                  placeholder="www.turestaurante.com o @instagram"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="mb-2 block text-sm font-medium">Mensaje</label>
                <textarea
                  id="mensaje" rows={4} value={form.mensaje}
                  onChange={(e) => handleChange("mensaje", e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-bg-dark px-4 py-3 text-white placeholder-text-muted focus:border-violet-glow focus:outline-none focus:ring-1 focus:ring-violet-glow resize-none"
                  placeholder="Contanos sobre tu restaurante, cantidad de mesas, que necesitas..."
                />
              </div>
              <button
                type="submit" disabled={sending}
                className="w-full gradient-violet glow-violet-sm rounded-xl py-4 font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {sending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                {sending ? "Enviando..." : "Enviar consulta"}
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
