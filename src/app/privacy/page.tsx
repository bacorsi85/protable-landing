import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de Privacidad de la plataforma ProTable.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24">
        <article className="mx-auto max-w-3xl px-6 py-20 prose prose-slate">
          <h1 className="text-4xl font-black text-slate-900">Política de Privacidad</h1>
          <p className="text-slate-400">Última actualización: 26 de marzo de 2026</p>

          <h2>1. Introducción</h2>
          <p>ProTable SAS es responsable del tratamiento de datos personales de los usuarios de la plataforma ProTable. Esta Política describe cómo recopilamos, usamos, almacenamos y protegemos los datos personales en cumplimiento con la Ley 25.326 de Protección de Datos Personales.</p>

          <h2>2. Datos que Recopilamos</h2>
          <p><strong>Comensales:</strong> Nombre, email, teléfono, preferencias alimentarias e información de pago tokenizada.</p>
          <p><strong>Restaurantes:</strong> Razón social, CUIT, datos de contacto, datos bancarios para transferencias e información fiscal.</p>

          <h2>3. Finalidad del Tratamiento</h2>
          <p>Utilizamos los datos para: gestionar cuentas, procesar pedidos y pagos, facilitar comunicación comensal-restaurante, analizar patrones de uso y enviar comunicaciones comerciales (con consentimiento).</p>

          <h2>4. Seguridad</h2>
          <p>Implementamos cifrado TLS 1.3, tokenización de datos de pago vía procesadores certificados PCI-DSS, y acceso restringido con principio de mínimo privilegio.</p>

          <h2>5. Derechos de los Titulares</h2>
          <p>Conforme a la Ley 25.326, usted tiene derecho a acceso, rectificación, supresión, oposición y portabilidad de sus datos. Para ejercer estos derechos, escriba a <a href="mailto:contacto@protable.io" className="text-emerald-500 hover:underline">contacto@protable.io</a>.</p>

          <h2>6. Cookies</h2>
          <p>Utilizamos cookies esenciales (autenticación, seguridad) que no requieren consentimiento, y cookies analíticas que requieren consentimiento previo.</p>

          <h2>7. Contacto</h2>
          <p>Para consultas sobre privacidad: <a href="mailto:contacto@protable.io" className="text-emerald-500 hover:underline">contacto@protable.io</a></p>
        </article>
      </main>
      <Footer />
    </>
  );
}
