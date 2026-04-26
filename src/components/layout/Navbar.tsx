"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        setIsMenuOpen(false);
        
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - 90;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start: number | null = null;

        const animation = (currentTime: number) => {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const progress = Math.min(timeElapsed / duration, 1);
          
          const ease = 1 - Math.pow(1 - progress, 3);
          
          window.scrollTo(0, startPosition + distance * ease);
          
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        };

        requestAnimationFrame(animation);
      }
    } else {
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Produk", href: "#produk" },
    { name: "Layanan", href: "#layanan" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "FAQ", href: "#faq" },
    { name: "Instagram", href: "https://instagram.com/mvgs.store" },
  ];

  return (
    <nav
      className={cn(
        "sticky top-0 z-[var(--z-sticky)] transition-all duration-300 border-b border-[#1a1a1a]",
        scrolled ? "glass-nav py-2" : "bg-transparent py-4"
      )}
      style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center gap-1.5 shrink-0">
            <a
              href="#beranda"
              onClick={(e) => handleLinkClick(e, "#beranda")}
              className="text-white font-bold text-xl tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded transition-shadow"
            >
              mvgs.store
            </a>
            <CheckCircle2 className="w-4 h-4 text-accent-blue fill-accent-blue/20" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-text-muted hover:text-white hover:bg-white/5 transition-all duration-200 text-sm font-medium py-2 px-4 min-h-[44px] inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {link.name}
              </a>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (window.navigator.vibrate) window.navigator.vibrate(10);
            }}
            className="md:hidden flex items-center justify-center min-h-[48px] min-w-[48px] -mr-2 text-text-muted hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg transition-colors"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "md:hidden bg-[#111111] border-t border-[#1a1a1a] transition-all duration-300 origin-top shadow-2xl absolute w-full left-0 top-[100%] grid",
          isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block text-text-muted hover:text-white hover:bg-white/5 px-4 py-3.5 rounded-lg text-base font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
