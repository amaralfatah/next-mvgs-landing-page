import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "mvgs.store — Destinasi iPhone Original Pangandaran",
  description: "Toko gadget terpercaya di Pangandaran. Menyediakan iPhone & Android original, layanan tukar tambah, dan unblock IMEI dengan jaminan kepuasan pelanggan.",
  keywords: ["iphone pangandaran", "jual beli iphone pangandaran", "unblock imei pangandaran", "tukar tambah hp pangandaran"],
  openGraph: {
    title: "mvgs.store — Gadget Original Pangandaran",
    description: "Ready stock iPhone & Android original. Tukar tambah, unblock IMEI, & kirim seluruh Indonesia.",
    type: "website",
    url: "https://mvgs.store",
  },
};

export const viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased bg-primary text-text-muted`}>
        <a href="#main-content" className="skip-link">
          Lanjut ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
