"use client";
import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactoPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ nombre: "", email: "", whatsapp: "", pagina: "", mensaje: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al enviar");
      }

      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el mensaje. Intentá de nuevo.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-black tracking-tight md:text-5xl text-slate-900">
              Contactanos
            </h1>
            <p className="mt-4 text-lg text-slate-500">
              Contanos sobre tu restaurante y te ayudamos a arrancar.
            </p>
          </div>

          {sent ? (
            <div className="mt-16 rounded-2xl border border-emerald-200 bg-emerald-50 p-12 text-center">
              <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-500" />
              <h2 className="mt-6 text-2xl font-bold text-slate-900">Consulta enviada</h2>
              <p className="mt-2 text-slate-500">Te respondemos en menos de 24hs.</p>
              <a href="/" className="mt-8 inline-block rounded-full bg-emerald-500 hover:bg-emerald-600 px-8 py-3 font-semibold text-white transition-colors">
                Volver al inicio
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-16 space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              {error && (
                <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-600">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}
              <div>
                <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-slate-700">Nombre</label>
                <input
                  id="nombre" type="text" required value={form.nombre}
                  onChange={(e) => handleChange("nombre", e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input
                  id="email" type="email" required value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium text-slate-700">WhatsApp</label>
                <input
                  id="whatsapp" type="tel" required value={form.whatsapp}
                  onChange={(e) => handleChange("whatsapp", e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="+54 11 1234-5678"
                />
              </div>
              <div>
                <label htmlFor="pagina" className="mb-2 block text-sm font-medium text-slate-700">Página del restaurante (Web o Instagram)</label>
                <input
                  id="pagina" type="text" value={form.pagina}
                  onChange={(e) => handleChange("pagina", e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="www.turestaurante.com o @instagram"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="mb-2 block text-sm font-medium text-slate-700">Mensaje</label>
                <textarea
                  id="mensaje" rows={4} value={form.mensaje}
                  onChange={(e) => handleChange("mensaje", e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 resize-none"
                  placeholder="Contanos sobre tu restaurante, cantidad de mesas, qué necesitás..."
                />
              </div>
              <button
                type="submit" disabled={sending}
                className="w-full rounded-xl bg-amber-400 hover:bg-amber-500 py-4 font-semibold text-slate-900 transition-all hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
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
