import { Resend } from "resend";
import { NextResponse } from "next/server";
import { welcomeEmailHtml } from "@/emails/welcome";

export const dynamic = "force-dynamic";

const ADMIN_SECRET = process.env.WELCOME_EMAIL_SECRET || "protable-admin-2026";

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${ADMIN_SECRET}`) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const { email, local, contacto, url, ownerUsuario, ownerPassword, staffUsuario, staffPassword, mesas } = await request.json();

    if (!email || !local || !contacto || !ownerUsuario || !ownerPassword || !staffUsuario || !staffPassword || !mesas) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios: email, local, contacto, ownerUsuario, ownerPassword, staffUsuario, staffPassword, mesas" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const html = welcomeEmailHtml({
      local,
      contacto,
      url: url || "https://app.protable.io",
      ownerUsuario,
      ownerPassword,
      staffUsuario,
      staffPassword,
      mesas,
    });

    await resend.emails.send({
      from: "ProTable <contacto@protable.io>",
      to: [email],
      subject: `Tu cuenta demo de ${local} está lista`,
      html,
    });

    return NextResponse.json({ success: true, sentTo: email });
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return NextResponse.json(
      { error: "Error al enviar el email" },
      { status: 500 }
    );
  }
}
