"use client";

import { MessageCircle } from "lucide-react";

const PHONE = "5491137866868";
const MESSAGE = "Hola, quiero probar ProTable en mi local";

export default function WhatsAppButton() {
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactanos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-6 w-6 fill-white stroke-white" />
      <span className="hidden text-sm font-semibold sm:inline">Hablemos</span>
    </a>
  );
}
