"use client";

import { useState } from "react";
import SkillsData from "../data/skillsData";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";


export default function Skills() {
  const [selected, setSelected] = useState<number | null>(null);
  const {t} = useTranslation();

  return (
    <section className="w-[95%] mx-auto bg-primario text-primario py-14 rounded-b-2xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-secundario">
          {t("skillsTitle")}
        </h2>
        <p className="text-[15px] text-black/70 mt-2">
        {t("skillsSubTitle")}
        </p>
      </div>

      {/* Grid */}
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SkillsData.map(({ img, title }, i) => (
          <motion.div
            key={i}
            layout
            onClick={() => setSelected(selected === i ? null : i)}
            className={`cursor-pointer rounded-xl border bg-secundario text-[#f1f0f1] p-5 transition-all duration-500
              ${
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
                  className="text-[15px] leading-relaxed"
                >
                  {t(`SkillsData.${title}.descTwo`)}
                </motion.p>
              </AnimatePresence>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-[60px] h-[60px] flex justify-center items-center rounded-lg bg-primario/10">
                  <Image
                    src={img}
                    alt={title}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[18px] font-semibold hover:text-[#db5c32] transition-colors">
                    {title}
                  </h3>
                  <p className="pt-1 text-[14px] text-[#e4e3e4]/90">{t(`SkillsData.${title}.desc`)}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

