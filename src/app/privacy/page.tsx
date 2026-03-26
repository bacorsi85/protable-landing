import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Privacidad",
  description: "Politica de Privacidad de la plataforma ProTable.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-dark pt-24">
        <article className="mx-auto max-w-3xl px-6 py-20 prose prose-invert prose-violet">
          <h1 className="text-4xl font-black gradient-text-violet">Politica de Privacidad</h1>
          <p className="text-text-muted">Ultima actualizacion: 26 de marzo de 2026</p>

          <h2>1. Introduccion</h2>
          <p>ProTable SAS es responsable del tratamiento de datos personales de los usuarios de la plataforma ProTable. Esta Politica describe como recopilamos, usamos, almacenamos y protegemos los datos personales en cumplimiento con la Ley 25.326 de Proteccion de Datos Personales.</p>

          <h2>2. Datos que Recopilamos</h2>
          <p><strong>Comensales:</strong> Nombre, email, telefono, preferencias alimentarias e informacion de pago tokenizada.</p>
          <p><strong>Restaurantes:</strong> Razon social, CUIT, datos de contacto, datos bancarios para transferencias e informacion fiscal.</p>

          <h2>3. Finalidad del Tratamiento</h2>
          <p>Utilizamos los datos para: gestionar cuentas, procesar pedidos y pagos, facilitar comunicacion comensal-restaurante, analizar patrones de uso y enviar comunicaciones comerciales (con consentimiento).</p>

          <h2>4. Seguridad</h2>
          <p>Implementamos cifrado TLS 1.3, tokenizacion de datos de pago via procesadores certificados PCI-DSS, y acceso restringido con principio de minimo privilegio.</p>

          <h2>5. Derechos de los Titulares</h2>
          <p>Conforme a la Ley 25.326, usted tiene derecho a acceso, rectificacion, supresion, oposicion y portabilidad de sus datos. Para ejercer estos derechos, escriba a <a href="mailto:contacto@protable.io" className="text-violet-glow hover:underline">contacto@protable.io</a>.</p>

          <h2>6. Cookies</h2>
          <p>Utilizamos cookies esenciales (autenticacion, seguridad) que no requieren consentimiento, y cookies analiticas que requieren consentimiento previo.</p>

          <h2>7. Contacto</h2>
          <p>Para consultas sobre privacidad: <a href="mailto:contacto@protable.io" className="text-violet-glow hover:underline">contacto@protable.io</a></p>
        </article>
      </main>
      <Footer />
    </>
  );
}
