"use client";

import { motion } from "framer-motion";
import { Smartphone, Repeat, Lock, Truck } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Smartphone,
      title: "Jual iPhone Original",
      desc: "Tersedia iPhone resmi & ex-inter. Kondisi mulus, harga bersahabat, bisa cicilan."
    },
    {
      icon: Repeat,
      title: "Trade-in HP Lama",
      desc: "Tukar tambah HP lamamu dengan harga terbaik. Proses cepat, transparan, anti ribet."
    },
    {
      icon: Lock,
      title: "Unblock IMEI",
      desc: "3 Bulan Rp 200.000 · Permanen tersedia. iPhone kamu kembali normal."
    },
    {
      icon: Truck,
      title: "Kirim Se-Indonesia",
      desc: "Pengiriman ke seluruh Indonesia. Packing aman, COD tersedia, tracking real-time."
    }
  ];

  return (
    <section id="layanan" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(28px,4vw,40px)] font-bold text-white tracking-[-0.03em] mb-4"
        >
          Layanan Kami
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-muted text-lg max-w-2xl mx-auto"
        >
          Semua kebutuhan iPhone & Android kamu, kami handle dengan profesional
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-surface border border-border-def rounded-2xl p-8 hover:bg-surface-hover hover:border-border-hover hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <service.icon className="w-6 h-6 text-accent-blue" />
            </div>
            <h3 className="font-bold text-text-main text-lg mb-3 tracking-tight">{service.title}</h3>
            <p className="text-text-muted text-[15px] leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
