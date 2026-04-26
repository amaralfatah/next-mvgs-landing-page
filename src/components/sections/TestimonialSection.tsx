"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Star, Check } from "lucide-react";
import { products } from "@/data/products";

function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 1000, bounce: 0 });
  const displayValue = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  return (
    <motion.span ref={ref}>
      {displayValue}
    </motion.span>
  );
}

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "iPhone 13 nya mulus banget, sesuai foto. Pengiriman cepat, packing aman. Recommended!",
      author: "R***i, Bandung"
    },
    {
      text: "Trade-in HP lama lancar, harga ditawar fair. Admin fast respon, gak perlu tunggu lama.",
      author: "A***d, Jakarta"
    },
    {
      text: "Unblock IMEI berhasil dalam sehari. Legit dan terpercaya, udah 2x beli di sini!",
      author: "F***a, Surabaya"
    }
  ];

  return (
    <section id="testimoni" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(28px,4vw,40px)] font-bold text-white tracking-[-0.03em] mb-4"
        >
          Sudah Banyak yang Percaya
        </motion.h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24 mb-20">
        <div className="text-center">
          <div className="text-[48px] font-bold text-white leading-none mb-2 tracking-tight">
            <Counter value={36} />+
          </div>
          <div className="text-sm text-text-muted">Pesanan Berhasil</div>
        </div>
        <div className="text-center">
          <div className="text-[48px] font-bold text-white leading-none mb-2 tracking-tight">
            <Counter value={966} />+
          </div>
          <div className="text-sm text-text-muted">Followers Instagram</div>
        </div>
        <div className="text-center">
          <div className="text-[48px] font-bold text-white leading-none mb-2 tracking-tight">
            <Counter value={100} />%
          </div>
          <div className="text-sm text-text-muted">Amanah & Terpercaya</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="grid grid-cols-3 gap-3">
          {products.slice(0, 6).map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-prod-visual aspect-square rounded-lg overflow-hidden relative flex items-center justify-center"
            >
              <div className="absolute top-0 left-0 bg-cta text-white text-[11px] font-medium px-2 py-1 rounded-br-lg flex items-center gap-1 leading-none shadow-sm z-10">
                <Check className="w-2.5 h-2.5 stroke-[2]" />
                SOLD
              </div>
              <Image
                src={product.image}
                alt={`Terjual: ${product.name}`}
                fill
                className="object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface border border-border-def rounded-xl p-5 hover:bg-surface-hover hover:border-border-hover transition-colors duration-300"
            >
              <div className="flex gap-1 mb-3 text-star-yellow">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-text-muted text-sm italic mb-3">"{testi.text}"</p>
              <p className="text-text-main text-[13px] font-medium">— {testi.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
