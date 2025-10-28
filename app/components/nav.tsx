"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n"; // 👈 importante

export default function Nav() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  const handleClick = () => new Audio("/sound/button-1.wav").play();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="relative z-50">
      <div
        className={`bg-[#f1f0f1] fixed z-50 h-[50px] lg:w-[93%] md:w-[90%] mx-9 transition-all duration-300 text-[#030503] pb-3 ${
          scrolled ? "top-0" : "top-12"
        }`}
      >
        <div className="relative h-full flex items-center pl-7 pr-8 mt-1">
          <div className="flex flex-col">
            <a
              onClick={handleClick}
              className="hover:text-[#db5c32] font-semibold lg:text-[15px] md:text-[10px]"
              href="#home"
            >
              Nicolas Eliazer Jara
            </a>
            <p className="text-[#292e29] lg:text-[12px] md:text-[9px]">La Pampa, Argentina</p>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 lg:text-[16px] md:text-[9px] sm:text-[8px] ">
            <ul className="flex bg-white rounded-lg shadow-sm">
              {["home", "aboutNav", "work", "contact"].map((key) => (
                <a
                  key={key}
                  onClick={handleClick}
                  href={`#${key}`}
                  className="px-6 py-1 hover:bg-[#030503] hover:text-white rounded-lg transition"
                >
                  {t(key)}
                </a>
              ))}
            </ul>
          </div>

          <div className="absolute right-6 lg:text-[12px] md:text-[8px] sm:text-[8px]">
            <select
              className="bg-white text-[#030503] border border-gray-300 rounded-md px-3 py-1 shadow-sm hover:text-[#db5c32] focus:text-[#db5c32] focus:bg-white focus:outline-none transition"
              onChange={handleChange}
              onClick={handleClick}
              defaultValue={i18n.language}
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
