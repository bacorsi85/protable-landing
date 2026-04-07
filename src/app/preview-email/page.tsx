import { welcomeEmailHtml } from "@/emails/welcome";

export default function PreviewEmail() {
  const html = welcomeEmailHtml({
    local: "La Parrilla de Juan",
    contacto: "Juan",
    url: "https://app.protable.io",
    ownerUsuario: "juan@laparrilla.com",
    ownerPassword: "owner-demo-123",
    staffUsuario: "mozo@laparrilla.com",
    staffPassword: "staff-demo-456",
    mesas: 15,
  });

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">
      <p className="text-center text-sm text-slate-500 mb-4">Preview del email de bienvenida — no se publica en producción</p>
      <iframe
        srcDoc={html}
        className="mx-auto w-full max-w-[650px] h-[1600px] border border-slate-200 rounded-lg shadow-lg bg-white"
        title="Email preview"
      />
    </div>
  );
}
