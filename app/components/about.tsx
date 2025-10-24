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
        <div className="flex w-[90%] mx-auto">
          <div className="w-[50%] h-[620px] relative">
            <Image
              src="/img/a.jpg"
              alt="fondo"
              className="rounded-l-[15px] object-cover"
              fill
              priority
            />
          </div>
          <div className="bg-secundario w-[50%] rounded-r-[15px] flex justify-center pt-[25px] h-[620px]">
            <p className="text-[#E0E9EE] w-[70%] text-[16px] my-auto">
              {t("about")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
