import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terminos y Condiciones",
  description: "Terminos y Condiciones de uso de la plataforma ProTable.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24">
        <article className="mx-auto max-w-3xl px-6 py-20 prose prose-slate">
          <h1 className="text-4xl font-black text-slate-900">Terminos y Condiciones de Uso</h1>
          <p className="text-slate-400">Ultima actualizacion: 26 de marzo de 2026</p>

          <h2>1. Aceptacion de Terminos</h2>
          <p>Estos Terminos y Condiciones regulan el uso de la plataforma ProTable, operada por ProTable SAS, con domicilio legal en Buenos Aires, Argentina. Al acceder o utilizar la Plataforma, usted acepta quedar vinculado por estos Terminos.</p>

          <h2>2. Descripcion del Servicio</h2>
          <p>ProTable es una plataforma digital que conecta comensales con restaurantes adheridos, permitiendo:</p>
          <ul>
            <li><strong>Para Comensales:</strong> Visualizacion de menus digitales, realizacion de pedidos, division inteligente de cuentas y procesamiento de pagos.</li>
            <li><strong>Para Restaurantes:</strong> Gestion digital de menus, recepcion de pedidos, procesamiento de pagos y herramientas de administracion.</li>
          </ul>

          <h2>3. Registro y Cuenta de Usuario</h2>
          <p>Para utilizar ciertas funcionalidades de la Plataforma, debera crear una cuenta proporcionando informacion veraz, completa y actualizada. Usted es responsable de mantener la confidencialidad de sus credenciales de acceso.</p>

          <h2>4. Uso Aceptable</h2>
          <p>El Usuario se compromete a utilizar la Plataforma de conformidad con la ley, estos Terminos, la moral y las buenas costumbres. Queda prohibido el uso de la Plataforma para fines ilicitos o que perjudiquen derechos de terceros.</p>

          <h2>5. Pagos y Facturacion</h2>
          <p>Los pagos se procesan a traves de MercadoPago u otros procesadores habilitados. ProTable no almacena datos de tarjetas. Las comisiones aplicables se detallan en la seccion de precios vigente.</p>

          <h2>6. Propiedad Intelectual</h2>
          <p>Todo el contenido de la Plataforma, incluyendo textos, graficos, logos, iconos, imagenes y software, es propiedad de ProTable o de sus licenciantes y esta protegido por las leyes de propiedad intelectual.</p>

          <h2>7. Limitacion de Responsabilidad</h2>
          <p>ProTable no sera responsable por danos indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de uso de la Plataforma. La responsabilidad maxima se limita al monto pagado por el Usuario en los ultimos 12 meses.</p>

          <h2>8. Modificaciones</h2>
          <p>ProTable se reserva el derecho de modificar estos Terminos en cualquier momento. Las modificaciones seran notificadas a los usuarios registrados con 15 dias de anticipacion.</p>

          <h2>9. Ley Aplicable</h2>
          <p>Estos Terminos se rigen por las leyes de la Republica Argentina. Cualquier controversia sera sometida a la jurisdiccion de los Tribunales Ordinarios de la Ciudad Autonoma de Buenos Aires.</p>

          <h2>10. Contacto</h2>
          <p>Para consultas legales: <a href="mailto:contacto@protable.io" className="text-emerald-500 hover:underline">contacto@protable.io</a></p>
        </article>
      </main>
      <Footer />
    </>
  );
}
