import Link from "next/link";
import { CheckCircle2, Phone, MapPin, Camera } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-primary border-t border-[#1a1a1a] pt-16 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-white font-bold text-xl tracking-tight">mvgs.store</span>
            <CheckCircle2 className="w-4 h-4 text-accent-blue fill-accent-blue/20" />
          </div>
          <p className="text-text-muted text-sm italic">Authentic iPhone & Tech</p>
          <p className="text-text-muted text-[13px] max-w-[280px] mt-2 leading-[1.6]">
            Solusi kebutuhan gadget Apple & Android terpercaya di Pangandaran. Melayani tukar tambah, jasa unblock IMEI, dan pengiriman aman ke seluruh penjuru Nusantara.
          </p>
        </div>

        <div>
          <h4 className="text-[#888] text-xs font-semibold uppercase tracking-widest mb-4">Navigasi</h4>
          <ul className="flex flex-col gap-1">
            {["Beranda", "Produk", "Layanan", "Testimoni", "FAQ"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="inline-flex items-center min-h-[40px] text-text-muted hover:text-white transition-colors duration-200 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[#888] text-xs font-semibold uppercase tracking-widest mb-4">Hubungi Kami</h4>
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="https://wa.me/628568773490"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 min-h-[40px] text-text-muted hover:text-white transition-colors duration-200 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
              >
                <Phone className="w-5 h-5 shrink-0" />
                +62 856-8773-490
              </a>
            </li>
            <li className="inline-flex items-center gap-3 min-h-[40px] text-text-muted text-sm cursor-default">
              <MapPin className="w-5 h-5 shrink-0" />
              Pangandaran, Jawa Barat
            </li>
            <li>
              <a
                href="https://instagram.com/mvgs.store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 min-h-[40px] text-text-muted hover:text-white transition-colors duration-200 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
              >
                <Camera className="w-5 h-5 shrink-0" />
                @mvgs.store
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto border-t border-[#1a1a1a] mt-12 pt-6 text-center">
        <p className="text-[#444] text-[13px]">© {currentYear} mvgs.store — Pangandaran Trusted Gadget Shop.</p>
      </div>
    </footer>
  );
}
