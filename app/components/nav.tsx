"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const handleClick =() => {
    const boton = new Audio("/sound/button-1.wav");
    boton.play();
  }

  const { i18n, t } = useTranslation();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="relative z-50">
      <div
        className={`bg-[#f1f0f1] fixed z-50 h-[50px] w-[94%] mx-9 transition-all duration-300 text-[#030503] pb-3 ${
          scrolled ? "top-0" : "top-12"
        }`}
      >
        <div className="relative h-full flex items-center pl-7 pr-8 mt-1">
          {/* Nombre */}
          <div className="flex flex-col">
            <a onClick={handleClick}
              className="hover:text-[#db5c32] font-semibold"
              href="#home"
            >
              Nicolas Eliazer Jara
            </a>
            <p className="text-[#292e29] text-[12px]">
              La Pampa, Argentina
            </p>
          </div>

          {/* Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-[16px]">
            <ul className="flex bg-white rounded-lg shadow-sm">
              <a
              onClick={handleClick}
                href="#home"
                className="px-6 py-1 hover:bg-[#030503] hover:text-white rounded-lg transition"
              >
                {t("home")}
              </a>
              <a
              onClick={handleClick}
                href="#about"
                className="px-6 py-1 hover:bg-[#030503] hover:text-white rounded-lg transition"
              >
                {t("aboutNav")}
              </a>
              <a
              onClick={handleClick}
                href="#work"
                className="px-6 py-1 hover:bg-[#030503] hover:text-white rounded-lg transition"
              >
                {t("work")}
              </a>
              <a
              onClick={handleClick}
                href="#contact"
                className="px-6 py-1 hover:bg-[#030503] hover:text-white rounded-lg transition"
              >
                {t("contact")}
              </a>
            </ul>
          </div>

          {/* Selector de idioma */}
          <div className="absolute right-6 text-[12px]">
          <select
  className="bg-white text-[#030503] border border-gray-300 rounded-md px-3 py-1 shadow-sm
  hover:text-[#db5c32] focus:text-[#db5c32] focus:bg-white focus:outline-none transition"
  onChange={handleChange}
  onClick={handleClick}
  defaultValue={i18n.language}
>
  <option
    value="es"
    className="bg-white text-[#db5c32] hover:bg-[#db5c32] hover:text-white"
  >
    Español
  </option>
  <option
    value="en"
    className="bg-white text-[#db5c32] hover:bg-[#db5c32] hover:text-white"
  >
    English
  </option>
</select>

          </div>
        </div>
      </div>
    </nav>
  );
}
