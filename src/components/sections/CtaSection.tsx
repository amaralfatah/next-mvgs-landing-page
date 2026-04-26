"use client";

import { motion } from "framer-motion";
import { MessageCircle, Camera } from "lucide-react";

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="py-[120px] px-6 text-center w-full bg-radial-cta"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[800px] mx-auto"
      >
        <span className="inline-block px-3 py-1 bg-[#1a1a1a] border border-[#222] rounded-full text-[13px] text-[#A0A0A0] mb-6 tracking-wide">
          Siap sekarang?
        </span>
        <h2 className="text-[clamp(32px,5vw,56px)] font-bold text-white tracking-[-0.03em] mb-4 leading-[1.1]">
          Siap Upgrade ke iPhone Impianmu?
        </h2>
        <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
          Chat admin sekarang — respons cepat, harga bersahabat, transaksi aman terjamin
        </p>
        <div className="flex justify-center">
          <a
            href="https://wa.me/628568773490?text=Halo%20admin%20mvgs.store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 text-white px-10 py-4 min-h-[52px] rounded-xl font-bold text-lg shadow-xl shadow-cta/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
            aria-label="Chat Admin mvgs.store via WhatsApp"
          >
            <MessageCircle className="w-6 h-6 fill-white/20" />
            Chat Admin Sekarang
          </a>
        </div>
        <div className="mt-6 text-sm text-[#A0A0A0]">
          Atau follow Instagram kami{" "}
          <a
            href="https://instagram.com/mvgs.store"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 rounded transition-shadow"
            aria-label="Kunjungi Instagram mvgs.store"
          >
            <Camera className="w-4 h-4" />
            @mvgs.store
          </a>
        </div>
      </motion.div>
    </section>
  );
}

