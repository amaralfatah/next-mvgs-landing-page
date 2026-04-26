"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  onClick?: () => void;
}

export default function ProductCard({ product, priority, onClick }: ProductCardProps) {
  const waLink = `https://wa.me/628568773490?text=Halo%20admin%20mvgs.store%2C%20saya%20tertarik%20${encodeURIComponent(product.name)}%20${encodeURIComponent(product.storage)}`;

  return (
    <article 
      onClick={() => {
        if (window.navigator.vibrate) window.navigator.vibrate(10);
        onClick?.();
      }}
      className="bg-prod-bg border border-prod-border rounded-2xl overflow-hidden hover:border-prod-border-hover hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/60 transition-all duration-500 group flex flex-col cursor-pointer relative"
    >
      <div className="aspect-[4/3] bg-prod-visual overflow-hidden relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-[#2A2826] text-[#D1D1D1] border border-[#3A3836] rounded-full px-2.5 py-1 text-[11px] font-medium leading-none flex items-center tracking-wide">
            Kondisi {product.condition}
          </span>
          <span className={product.type === 'iPhone' ? "bg-[#1e3a5f]/40 text-[#93c5fd] border border-[#1e3a5f] rounded-full px-2.5 py-1 text-[11px] font-medium leading-none flex items-center tracking-wide" : "bg-[#14290a]/40 text-[#86efac] border border-[#14290a] rounded-full px-2.5 py-1 text-[11px] font-medium leading-none flex items-center tracking-wide"}>
            {product.type}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-text-main text-base mb-1.5 leading-tight tracking-tight">{product.name}</h3>
          <p className="text-text-muted text-[13px] mb-4">{product.color} · {product.storage}</p>
        </div>
        <div className="mt-auto">
          <p className="text-[20px] font-extrabold text-white mb-5 tracking-tight">Rp {product.price}</p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              if (window.navigator.vibrate) window.navigator.vibrate([10, 30, 10]);
            }}
            className="w-full inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 text-white min-h-[48px] rounded-xl font-medium text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] relative z-20 shadow-lg shadow-cta/20"
            aria-label={`Tanya harga ${product.name} via WhatsApp`}
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            Tanya via WA
          </a>
        </div>
      </div>
    </article>
  );
}
