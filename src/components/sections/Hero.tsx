"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="min-h-[100dvh] flex items-center pt-[72px] -mt-[72px] overflow-hidden relative bg-black"
    >
      <div className="absolute inset-0 noise z-0" />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/10 rounded-full blur-[160px] pointer-events-none opacity-50" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h1 className="text-[clamp(42px,8vw,84px)] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-8">
              iPhone Original,<br />
              Harga Bersahabat
            </h1>
            
            <p className="text-lg lg:text-xl text-text-muted max-w-xl mb-10 leading-relaxed font-medium">
              Toko iPhone & Aksesoris terpercaya di Pangandaran. Ready stock, Trade-in, & Kirim Seluruh Indonesia.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 w-full sm:w-auto">
              <a
                href="https://wa.me/628568773490?text=Halo%20admin%20mvgs.store"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2.5 bg-cta hover:bg-cta-hover transition-all duration-300 text-white px-8 py-4 w-full sm:w-auto rounded-xl font-bold text-base shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:shadow-[0_0_30px_rgba(22,163,74,0.5)] hover:-translate-y-1 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 group-hover:rotate-12 transition-transform" />
                Chat Admin
              </a>
              <a
                href="#produk"
                className="flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 text-white px-8 py-4 w-full sm:w-auto rounded-xl font-bold text-base hover:-translate-y-1 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <ShoppingBag className="w-5 h-5" />
                Lihat Produk
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[480px] lg:max-w-none mx-auto perspective-1000"
          >
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-white/10 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative aspect-[4/5] lg:aspect-square">
                <Image
                  src="/images/hero-iphone.png"
                  alt="Premium iPhone 15 Pro Mockup"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
