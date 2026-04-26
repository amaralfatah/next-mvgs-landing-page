"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Instagram } from "@/components/ui/Icons";
import Image from "next/image";

const igPosts = [
  { id: 1, image: "/images/instagram/ig-1.png" },
  { id: 2, image: "/images/instagram/ig-2.png" },
  { id: 3, image: "/images/instagram/ig-3.png" },
  { id: 4, image: "/images/instagram/ig-4.png" },
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center shadow-lg shadow-pink-500/20">
              <Instagram className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-text-muted tracking-wider uppercase">Instagram Feed</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(32px,5vw,48px)] font-bold text-white tracking-[-0.03em] mb-6 leading-tight"
          >
            Lihat Katalog & Update <br className="hidden sm:block" /> 
            <span className="text-accent-blue">Real-time</span> di Instagram
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg mb-10 leading-relaxed max-w-xl"
          >
            Kami selalu memperbarui stok dan memberikan promo eksklusif melalui Instagram. Follow untuk mendapatkan info unit terbaru sebelum kehabisan!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://instagram.com/mvgs.store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black hover:bg-white/90 transition-all duration-300 px-8 py-4 rounded-2xl font-bold text-base shadow-xl hover:-translate-y-1 active:scale-[0.98]"
            >
              Follow @mvgs.store
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-4 relative">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />
            
            {igPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative aspect-square rounded-2xl overflow-hidden border border-white/10 group ${
                  index % 2 === 1 ? "translate-y-6" : ""
                }`}
              >
                <Image
                  src={post.image}
                  alt={`Instagram Post ${post.id}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
