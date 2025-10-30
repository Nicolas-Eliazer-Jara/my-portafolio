"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function About() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section id="aboutNav">
      <div className="w-[95%] mx-auto bg-[#f1f0f1]">
        {/* flex-row en desktop, flex-col en móvil */}
        <div className="flex flex-col sm:flex-row w-[90%] mx-auto">
          {/* Imagen */}
          <div className="relative sm:w-[50%] w-full sm:h-[520px] h-[250px] overflow-hidden rounded-t-[10px] sm:rounded-l-[15px] sm:rounded-tr-none">
  <Image
    src="/img/a.jpg"
    alt="fondo"
    fill
    priority
    className="object-cover transition-transform duration-700 hover:scale-110"
  />
</div>


          {/* Texto */}
          <div className="bg-secundario sm:w-[50%] w-full rounded-b-[10px] sm:rounded-r-[15px] sm:rounded-bl-none flex justify-center items-center p-6">
            <p className="text-[#E0E9EE] w-[85%] lg:text-[15px] md:text-[12px] text-[9px]  text-center sm:text-left">
              {t("about")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
