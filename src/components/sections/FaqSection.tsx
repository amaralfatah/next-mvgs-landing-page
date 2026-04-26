"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faq";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[720px] mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(28px,4vw,40px)] font-bold text-white tracking-[-0.03em] mb-4"
        >
          Pertanyaan Umum
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-muted text-lg"
        >
          Ada yang ingin ditanyakan? Cek dulu di sini
        </motion.p>
      </div>

      <div className="space-y-2 text-left">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-border-def last:border-none">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded-lg transition-all group"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className={openIndex === index ? "font-bold text-white text-[16px] pr-4 tracking-tight" : "font-medium text-text-main text-[16px] pr-4 group-hover:text-white transition-colors tracking-tight"}>
                {faq.question}
              </span>
              <div className={openIndex === index ? "bg-white/10 p-1.5 rounded-full" : "p-1.5 rounded-full"}>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-text-muted transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-white" : "rotate-0"
                  }`}
                />
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                  id={`faq-answer-${index}`}
                  role="region"
                >
                  <p className="text-text-muted text-[15px] leading-relaxed pb-6 pr-8">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
