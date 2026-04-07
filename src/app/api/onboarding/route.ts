import { Resend } from "resend";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { local, whatsapp, instagram, mesas, menu } = await request.json();

    if (!local || !whatsapp || !instagram || !mesas) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "ProTable <contacto@protable.io>",
      to: ["contacto@protable.io"],
      subject: `Nuevo onboarding: ${local} (${mesas} mesas)`,
      html: `
        <h2>Nueva solicitud de cuenta demo</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Local</td><td style="padding:8px;border:1px solid #ddd">${local}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">WhatsApp</td><td style="padding:8px;border:1px solid #ddd">${whatsapp}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Instagram / Web</td><td style="padding:8px;border:1px solid #ddd">${instagram}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Mesas</td><td style="padding:8px;border:1px solid #ddd">${mesas}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Link al menú</td><td style="padding:8px;border:1px solid #ddd">${menu || "No proporcionado — enviar por email"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending onboarding email:", error);
    return NextResponse.json(
      { error: "Error al enviar la solicitud" },
      { status: 500 }
    );
  }
}
