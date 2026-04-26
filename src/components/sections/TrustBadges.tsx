"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ShoppingBag, Truck, CircleDollarSign } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    { icon: ShieldCheck, text: "Verified ", strong: "966+ Foll" },
    { icon: ShoppingBag, text: "Unit ", strong: "36+ Terjual" },
    { icon: Truck, text: "Kirim ", strong: "Se-Indo" },
    { icon: CircleDollarSign, text: "Bayar ", strong: "di Tempat" },
  ];

  return (
    <section id="trust" className="bg-primary/50 backdrop-blur-sm border-y border-border-def py-8 lg:py-10 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-[var(--z-above)]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-y-8 gap-x-4 lg:gap-0"
        >
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-border-def group-hover:bg-accent-blue/10 group-hover:border-accent-blue/20 transition-all duration-300">
                <badge.icon className="w-5 h-5 lg:w-6 lg:h-6 text-accent-blue" />
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-[11px] uppercase tracking-[0.1em] text-text-muted mb-0.5 font-medium">
                  {badge.text.trim()}
                </span>
                <strong className="text-sm lg:text-base font-bold text-white tracking-tight">
                  {badge.strong}
                </strong>
              </div>
              {index < badges.length - 1 && (
                <div className="hidden lg:block h-8 w-px bg-border-def ml-12"></div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
