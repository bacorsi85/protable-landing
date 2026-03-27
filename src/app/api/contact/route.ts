import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nombre, email, whatsapp, pagina, mensaje } = await request.json();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son obligatorios" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "ProTable <contacto@protable.io>",
      to: ["contacto@protable.io"],
      replyTo: email,
      subject: `Nueva consulta de ${nombre} - ProTable`,
      html: `
        <h2>Nueva consulta desde protable.io</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Nombre</td><td style="padding:8px;border:1px solid #ddd">${nombre}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">WhatsApp</td><td style="padding:8px;border:1px solid #ddd">${whatsapp || "No proporcionado"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Pagina</td><td style="padding:8px;border:1px solid #ddd">${pagina || "No proporcionada"}</td></tr>
        </table>
        <h3>Mensaje:</h3>
        <p style="white-space:pre-wrap">${mensaje}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
