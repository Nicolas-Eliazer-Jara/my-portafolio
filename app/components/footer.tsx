'use client';

import { useTranslation } from "react-i18next";
import Contact from "../data/contact";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  const {t} = useTranslation()

  return (
    <>
      <section id="contact">
        <div className=" pt-5 font-inter mt-10 w-[95%] mx-auto rounded-[10px]  mb-5 bg-[#030503] text-[#f1f0f1]">
          <div className=" w-[90%] mx-auto border-b-[1px] border-[#db5c32]">
            <h1 className="text-[16px] text-center pb-5">Nicolas Eliazer Jara</h1>
          </div>

          <div className="flex justify-center gap-8 mt-7">
          {Contact.map(({ img, link, title }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
              className="hover:scale-110 transition-transform duration-200"
            >
              <Image src={img} alt={title} width={21} height={21} />
            </a>
          ))}
        </div>


        <div className="flex text-[13px] p-5 justify-center">
          <p className=" p-2">© 2025 Nicolas Eliazer Jara. {t("footer")}</p>
          <p className=" p-2">{t("lenguage")}</p>
          <p className=" p-2">{year}</p>
        </div>

        </div>
      </section>
    </>
  );
}
