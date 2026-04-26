"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import { Product } from "@/data/products";
import { useEffect } from "react";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!product) return null;

  const waLink = `https://wa.me/628568773490?text=Halo%20admin%20mvgs.store%2C%20saya%20tertarik%20${encodeURIComponent(product.name)}%20${encodeURIComponent(product.storage)}%20(${encodeURIComponent(product.color)})`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4 sm:p-6 lg:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-surface border border-white/10 rounded-[32px] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 transition-colors"
              aria-label="Tutup detail produk"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto relative bg-prod-visual">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <div className="bg-cta/20 backdrop-blur-md border border-cta/30 text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Original
                </div>
                <div className="bg-accent-blue/20 backdrop-blur-md border border-accent-blue/30 text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  Kondisi {product.condition.split(' ')[0]}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col overflow-y-auto no-scrollbar-mobile">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-accent-blue text-sm font-semibold tracking-wider uppercase">{product.type}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                  <span className="text-text-muted text-sm">{product.color}</span>
                </div>
                <h2 id="modal-title" className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-2">
                  {product.name}
                </h2>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-white tracking-tight">Rp {product.price}</span>
                  <span className="text-text-muted text-sm font-medium">{product.storage}</span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  Detail & Spesifikasi
                  <span className="h-px bg-white/10 flex-1"></span>
                </h3>
                <div className="grid grid-cols-1 gap-3 mb-8">
                  {product.features?.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="mt-1 w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent-blue/10 group-hover:border-accent-blue/20 transition-colors">
                        <CheckCircle2 className="w-3 h-3 text-accent-blue" />
                      </div>
                      <span className="text-text-muted text-sm lg:text-base group-hover:text-text-main transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-cta hover:bg-cta-hover active:scale-[0.98] transition-all duration-200 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-cta/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]"
                >
                  <MessageCircle className="w-6 h-6 fill-white/20" />
                  Beli via WhatsApp
                </a>
                <p className="text-center text-text-muted text-xs mt-4">
                  Stok terbatas! Klik tombol di atas untuk konfirmasi ketersediaan.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
