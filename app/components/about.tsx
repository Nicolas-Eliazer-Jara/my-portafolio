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
      <div className="w-[95%] mx-auto bg-fondo text-fondo pt-14  rounded-b-lg transition-colors duration-300">
        <div className="flex flex-col sm:flex-row w-full mx-auto">
          {/* Imagen */}
          <div className="relative sm:w-[50%] w-full sm:h-[620px] h-[250px] overflow-hidden ">
            <Image
              src="/img/a.jpg"
              alt="fondo"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

          {/* Texto - ESTA ES LA EXCEPCIÓN (usa variables de excepción) */}
          <div className="sm:w-[50%] w-full  flex justify-center items-center p-6 bg-[rgb(var(--exception-bg))] text-[rgb(var(--exception-text))] transition-colors duration-300">
            <p className="w-[85%] lg:text-[15px] md:text-[12px] text-[9px] text-center sm:text-left">
              {t("about")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
