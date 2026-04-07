interface WelcomeEmailProps {
  local: string;
  contacto: string;
  url: string;
  ownerUsuario: string;
  ownerPassword: string;
  staffUsuario: string;
  staffPassword: string;
  mesas: number;
}

export function welcomeEmailHtml({ local, contacto, url, ownerUsuario, ownerPassword, staffUsuario, staffPassword, mesas }: WelcomeEmailProps): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#f0fdf4;font-family:Inter,'Helvetica Neue',Arial,sans-serif;color:#0f172a">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;padding:32px 16px">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08)">

  <!-- HEADER -->
  <tr><td style="background:linear-gradient(135deg,#10b981 0%,#047857 100%);padding:28px 40px;text-align:center">
    <img src="https://app.protable.io/icon-192.png" width="44" height="44" alt="ProTable" style="display:inline-block;margin-bottom:8px;border-radius:8px" />
    <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700">ProTable</h1>
    <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px">Sistema de mesa digital</p>
  </td></tr>

  <!-- BIENVENIDA -->
  <tr><td style="padding:36px 40px 20px">
    <h2 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#0f172a">¡Bienvenido, ${contacto}!</h2>
    <p style="margin:0;font-size:15px;color:#64748b;line-height:1.7">
      Tu cuenta demo de <strong>${local}</strong> está lista con tu carta cargada y ${mesas} mesas configuradas. Ya podés empezar a explorar.
    </p>
  </td></tr>

  <!-- CREDENCIALES OWNER -->
  <tr><td style="padding:0 40px 16px">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;padding:20px">
      <tr><td>
        <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#047857;text-transform:uppercase;letter-spacing:0.5px">Perfil Owner — Acceso total</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:6px 0;font-size:14px;color:#64748b;width:100px">Panel</td>
            <td style="padding:6px 0;font-size:14px"><a href="${url}" style="color:#047857;font-weight:600;text-decoration:none">${url}</a></td>
          </tr>
          <tr>
            <td style="padding:6px 0;font-size:14px;color:#64748b">Usuario</td>
            <td style="padding:6px 0;font-size:14px;font-weight:600;color:#0f172a">${ownerUsuario}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;font-size:14px;color:#64748b">Contraseña</td>
            <td style="padding:6px 0;font-size:14px;font-weight:600;color:#0f172a;font-family:monospace">${ownerPassword}</td>
          </tr>
        </table>
        <p style="margin:12px 0 0;font-size:12px;color:#64748b">Menú, configuración, analytics, pagos, gestión de staff — todo.</p>
      </td></tr>
    </table>
  </td></tr>

  <!-- CREDENCIALES STAFF -->
  <tr><td style="padding:0 40px 28px">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:20px">
      <tr><td>
        <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#c2410c;text-transform:uppercase;letter-spacing:0.5px">Perfil Camarero — Operación diaria</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:6px 0;font-size:14px;color:#64748b;width:100px">Panel</td>
            <td style="padding:6px 0;font-size:14px"><a href="${url}" style="color:#c2410c;font-weight:600;text-decoration:none">${url}</a></td>
          </tr>
          <tr>
            <td style="padding:6px 0;font-size:14px;color:#64748b">Usuario</td>
            <td style="padding:6px 0;font-size:14px;font-weight:600;color:#0f172a">${staffUsuario}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;font-size:14px;color:#64748b">Contraseña</td>
            <td style="padding:6px 0;font-size:14px;font-weight:600;color:#0f172a;font-family:monospace">${staffPassword}</td>
          </tr>
        </table>
        <p style="margin:12px 0 0;font-size:12px;color:#64748b">Ver pedidos, atender mesas, cobrar — lo que usa el mozo día a día.</p>
      </td></tr>
    </table>
  </td></tr>

  <!-- CTA BUTTON -->
  <tr><td style="padding:0 40px 28px" align="center">
    <a href="${url}" style="display:inline-block;background:#f59e0b;color:#0f172a;font-weight:700;font-size:15px;padding:14px 40px;border-radius:8px;text-decoration:none">
      Ingresar a mi panel
    </a>
  </td></tr>

  <!-- DIVIDER -->
  <tr><td style="padding:0 40px"><hr style="border:none;border-top:1px solid #d1fae5;margin:0" /></td></tr>

  <!-- PRIMEROS PASOS -->
  <tr><td style="padding:28px 40px">
    <h3 style="margin:0 0 20px;font-size:18px;font-weight:700;color:#0f172a">Primeros pasos</h3>

    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="padding:0 0 20px">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="width:36px;vertical-align:top">
            <div style="width:28px;height:28px;border-radius:50%;background:#10b981;color:#fff;font-size:13px;font-weight:700;text-align:center;line-height:28px">1</div>
          </td>
          <td style="padding-left:12px">
            <p style="margin:0;font-size:14px;font-weight:600;color:#0f172a">Revisá tu carta</p>
            <p style="margin:4px 0 0;font-size:13px;color:#64748b;line-height:1.7">Ya cargamos tu menú con los datos que nos pasaste. Entrá a <strong>Menú</strong> en el panel y verificá que todo esté correcto. Podés editar precios, fotos y descripciones.</p>
          </td>
        </tr></table>
      </td></tr>

      <tr><td style="padding:0 0 20px">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="width:36px;vertical-align:top">
            <div style="width:28px;height:28px;border-radius:50%;background:#10b981;color:#fff;font-size:13px;font-weight:700;text-align:center;line-height:28px">2</div>
          </td>
          <td style="padding-left:12px">
            <p style="margin:0;font-size:14px;font-weight:600;color:#0f172a">Probá el flujo como cliente</p>
            <p style="margin:4px 0 0;font-size:13px;color:#64748b;line-height:1.7">Escaneá uno de los QR de prueba con tu celular. Vas a ver tu carta tal como la ve el cliente: elegir platos, armar el pedido y confirmar.</p>
          </td>
        </tr></table>
      </td></tr>

      <tr><td style="padding:0 0 20px">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="width:36px;vertical-align:top">
            <div style="width:28px;height:28px;border-radius:50%;background:#10b981;color:#fff;font-size:13px;font-weight:700;text-align:center;line-height:28px">3</div>
          </td>
          <td style="padding-left:12px">
            <p style="margin:0;font-size:14px;font-weight:600;color:#0f172a">Personalizá tu marca</p>
            <p style="margin:4px 0 0;font-size:13px;color:#64748b;line-height:1.7">En <strong>Configuración</strong> podés subir tu logo, elegir los colores de tu local y ajustar la tipografía. Tu cliente nunca ve "ProTable" — ve tu marca.</p>
          </td>
        </tr></table>
      </td></tr>

      <tr><td style="padding:0 0 20px">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="width:36px;vertical-align:top">
            <div style="width:28px;height:28px;border-radius:50%;background:#10b981;color:#fff;font-size:13px;font-weight:700;text-align:center;line-height:28px">4</div>
          </td>
          <td style="padding-left:12px">
            <p style="margin:0;font-size:14px;font-weight:600;color:#0f172a">Conectá tu Mercado Pago</p>
            <p style="margin:4px 0 0;font-size:13px;color:#64748b;line-height:1.7">En <strong>Configuración → Pagos</strong> vinculá tu cuenta de Mercado Pago para poder cobrar desde la mesa. Es un paso único: autorizás el acceso y listo. Tus clientes pagan directo a tu cuenta.</p>
          </td>
        </tr></table>
      </td></tr>

      <tr><td style="padding:0 0 20px">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="width:36px;vertical-align:top">
            <div style="width:28px;height:28px;border-radius:50%;background:#10b981;color:#fff;font-size:13px;font-weight:700;text-align:center;line-height:28px">5</div>
          </td>
          <td style="padding-left:12px">
            <p style="margin:0;font-size:14px;font-weight:600;color:#0f172a">Configurá tus impresoras (opcional)</p>
            <p style="margin:4px 0 0;font-size:13px;color:#64748b;line-height:1.7">Si tenés impresora de comandas con conexión a red, podés conectarla desde <strong>Configuración → Impresoras</strong>. Los pedidos llegan automáticamente a cocina y barra.</p>
          </td>
        </tr></table>
      </td></tr>

      <tr><td style="padding:0">
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="width:36px;vertical-align:top">
            <div style="width:28px;height:28px;border-radius:50%;background:#10b981;color:#fff;font-size:13px;font-weight:700;text-align:center;line-height:28px">6</div>
          </td>
          <td style="padding-left:12px">
            <p style="margin:0;font-size:14px;font-weight:600;color:#0f172a">Abrí una mesa y probá</p>
            <p style="margin:4px 0 0;font-size:13px;color:#64748b;line-height:1.7">Entrá a <strong>Gestión de mesas</strong>, abrí una mesa y escaneá el QR con tu celular. Hacé un pedido de prueba completo: elegí platos, confirmá y seguí el pedido en el panel en tiempo real.</p>
          </td>
        </tr></table>
      </td></tr>
    </table>
  </td></tr>

  <!-- DIVIDER -->
  <tr><td style="padding:0 40px"><hr style="border:none;border-top:1px solid #d1fae5;margin:0" /></td></tr>

  <!-- FAQ -->
  <tr><td style="padding:28px 40px">
    <h3 style="margin:0 0 20px;font-size:18px;font-weight:700;color:#0f172a">Preguntas frecuentes</h3>

    <p style="margin:0 0 4px;font-size:14px;font-weight:600;color:#0f172a">¿Necesito instalar algo?</p>
    <p style="margin:0 0 16px;font-size:13px;color:#64748b;line-height:1.7">No. ProTable funciona desde el navegador, tanto para vos como para tus clientes. No se descarga ninguna app.</p>

    <p style="margin:0 0 4px;font-size:14px;font-weight:600;color:#0f172a">¿Qué impresoras son compatibles?</p>
    <p style="margin:0 0 16px;font-size:13px;color:#64748b;line-height:1.7">Cualquier impresora térmica con conexión a red (WiFi o Ethernet). Las más comunes: Epson TM-T20, Star TSP100, Bixolon SRP-350. Si no tenés, podés recibir pedidos directamente en el panel sin impresora.</p>

    <p style="margin:0 0 4px;font-size:14px;font-weight:600;color:#0f172a">¿Hacen instalación de red?</p>
    <p style="margin:0 0 16px;font-size:13px;color:#64748b;line-height:1.7">Tu local necesita WiFi estable para que el sistema funcione. La configuración de la red local es responsabilidad del establecimiento. Si necesitás ayuda con la conexión de impresoras, te guiamos paso a paso por WhatsApp.</p>

    <p style="margin:0 0 4px;font-size:14px;font-weight:600;color:#0f172a">¿Cuánto dura la prueba gratis?</p>
    <p style="margin:0 0 0;font-size:13px;color:#64748b;line-height:1.7">30 días. Sin tarjeta, sin compromiso. Si te sirve, activamos tu cuenta de producción con Mercado Pago integrado.</p>
  </td></tr>

  <!-- DIVIDER -->
  <tr><td style="padding:0 40px"><hr style="border:none;border-top:1px solid #d1fae5;margin:0" /></td></tr>

  <!-- SOPORTE -->
  <tr><td style="padding:28px 40px;text-align:center">
    <p style="margin:0 0 12px;font-size:15px;color:#64748b;line-height:1.7">¿Tenés dudas? Escribinos por WhatsApp.</p>
    <a href="https://wa.me/5491137866868?text=${encodeURIComponent("Hola, tengo una consulta sobre mi cuenta demo de " + local)}" style="display:inline-block;background:#25D366;color:#ffffff;font-weight:600;font-size:14px;padding:12px 32px;border-radius:8px;text-decoration:none">
      Hablar por WhatsApp
    </a>
  </td></tr>

  <!-- FOOTER -->
  <tr><td style="background:#f0fdf4;padding:24px 40px;text-align:center;border-top:1px solid #d1fae5">
    <p style="margin:0 0 4px;font-size:12px;color:#6b7280">ProTable — Sistema de mesa digital</p>
    <p style="margin:0;font-size:12px;color:#6b7280">
      <a href="https://protable.io" style="color:#047857;text-decoration:none">protable.io</a> ·
      <a href="https://protable.io/privacy" style="color:#047857;text-decoration:none">Privacidad</a> ·
      <a href="https://protable.io/terms" style="color:#047857;text-decoration:none">Términos</a>
    </p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}
