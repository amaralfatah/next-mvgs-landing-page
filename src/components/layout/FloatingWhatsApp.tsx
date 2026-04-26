"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/628568773490?text=Halo%20admin%20mvgs.store"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-cta hover:bg-cta-hover text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200 group focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-white/20" />
      <span className="absolute right-[68px] bg-[#1a1a1a] text-white text-[13px] px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-md border border-[#222]">
        Chat Kami
      </span>
    </a>
  );
}
