"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import SkillsData from "../data/skillsData";

export default function Skills() {
  const [selected, setSelected] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false); // evita SSR mismatch
  const { t, ready } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !ready) return null; // espera a que i18n esté listo

  return (
    <section className="w-[95%] mx-auto bg-primario text-primario py-14 rounded-b-2xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="lg:text-[25px] md:text-[22px] text-[14px] font-bold text-secundario">{t("skillsTitle")}</h2>
        <p className="lg:text-[15px] md:text-[12px] text-[9px] text-black/70 mt-2">{t("skillsSubTitle")}</p>
      </div>

      {/* Grid */}
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-3">
        {SkillsData.map(({ img, title }, i) => (
          <motion.div
            key={i}
            layout
            onClick={() => setSelected(selected === i ? null : i)}
            className={`cursor-pointer rounded-xl border bg-secundario text-[#f1f0f1] md:p-5 p-3 transition-all duration-500 ${
              selected === i
                ? "border-[#db5c32] shadow-[0_12px_25px_0_rgba(255,165,0,0.5)]"
                : "hover:border-[#db5c32] hover:shadow-[0_6px_20px_0_rgba(255,165,0,0.35)] border-secundario"
            }`}
          >
            {selected === i ? (
              <AnimatePresence>
                <motion.p
                  key="descTwo"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="lg:text-[15px] md:text-[12px] text-[9px] leading-relaxed"
                >
                  {t(`SkillsData.${title}.descTwo`)}
                </motion.p>
              </AnimatePresence>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 lg:w-[60px] lg:h-[60px] w-[20px] h-[20px] flex justify-center items-center rounded-lg bg-primario/10">
                  <Image src={img} alt={title} width={36} height={36} className="object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="lg:text-[16px] md:text-[13px] text-[10px] font-semibold hover:text-[#db5c32] transition-colors">{title}</h3>
                  <p className="pt-1 lg:text-[15px] md:text-[12px] text-[9px] text-[#e4e3e4]/90">{t(`SkillsData.${title}.desc`)}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
