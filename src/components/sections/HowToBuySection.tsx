"use client";

import { motion } from "framer-motion";
import { Search, MessageSquare, CheckCircle2 } from "lucide-react";

export default function HowToBuySection() {
  const steps = [
    {
      no: "01",
      icon: Search,
      title: "Pilih Produk",
      desc: "Browse katalog di atas atau langsung chat admin untuk tanya stok."
    },
    {
      no: "02",
      icon: MessageSquare,
      title: "Konfirmasi via WA",
      desc: "Diskusi kondisi produk, harga final, dan opsi pengiriman."
    },
    {
      no: "03",
      icon: CheckCircle2,
      title: "Bayar & Terima",
      desc: "Transfer bank atau COD. Barang dikemas rapi dan dikirim ke alamatmu."
    }
  ];

  return (
    <section id="cara-beli" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(28px,4vw,40px)] font-bold text-white tracking-[-0.03em] mb-4"
        >
          Cara Pembelian
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-muted text-lg max-w-2xl mx-auto"
        >
          Mudah, cepat, dan aman — 3 langkah selesai
        </motion.p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-surface border border-border-def rounded-2xl p-8 hover:bg-surface-hover hover:border-border-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            {/* Number Background */}
            <div className="absolute -top-4 -right-4 text-[120px] font-black text-white/[0.03] select-none leading-none group-hover:text-accent-blue/5 transition-colors duration-500">
              {step.no}
            </div>

            <div className="relative z-10 flex flex-col items-center lg:items-start">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-8 border border-accent-blue/20 group-hover:scale-110 group-hover:bg-accent-blue/20 transition-all duration-500">
                <step.icon className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
              <p className="text-text-muted text-[15px] leading-relaxed text-center lg:text-left">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
