"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react"; // 👈 iconos de menú
import i18n from "../i18n";

export default function Nav() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  const handleClick = () => new Audio("/sound/button-1.wav").play();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    i18n.changeLanguage(e.target.value);

  return (
    <nav className="relative z-50">
      <div
        className={`bg-[#f1f0f1] fixed z-50 h-[50px] lg:w-[93%] md:w-[92%] mx-9 transition-all duration-300 text-[#030503] pb-3 ${
          scrolled ? "top-0" : "top-12"
        }`}
      >
        <div className="flex justify-between items-center h-full px-5">
          {/* LOGO */}
          <div className="flex flex-col">
            <a
              onClick={handleClick}
              href="#home"
              className="hover:text-[#db5c32] font-semibold lg:text-[14px] md:text-[12px] text-[10px]"
            >
              Nicolas Eliazer Jara
            </a>
            <p className="text-[#292e29] lg:text-[11px] md:text-[9px] text-[7px]">
              La Pampa, Argentina
            </p>
          </div>

          {/* BOTÓN HAMBURGUESA (solo móvil) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#030503] focus:outline-none ml-auto"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* MENÚ PRINCIPAL */}
          <div className="hidden md:flex space-x-6 bg-white rounded-lg shadow-sm lg:text-[14px] md:text-[12px] ">
            {["home", "aboutNav", "work", "contact"].map((key) => (
              <a
                key={key}
                onClick={handleClick}
                href={`#${key}`}
                className="px-4 py-1 hover:bg-[#030503] hover:text-white rounded-lg transition"
              >
                {t(key)}
              </a>
            ))}
          </div>

          {/* SELECTOR DE IDIOMA (desktop) */}
          <div className="hidden md:block lg:text-[12px] md:text-[10px]">
            <select
              className="bg-white text-[#030503] border border-gray-300 rounded-md px-2 py-1 shadow-sm hover:text-[#db5c32] focus:outline-none"
              onChange={handleChange}
              onClick={handleClick}
              defaultValue={i18n.language}
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        {/* MENÚ DESPLEGABLE (versión móvil) */}
        {menuOpen && (
          <div className="md:hidden absolute right-0 top-full bg-white rounded-b-lg shadow-lg mt-1 w-[150px] text-center text-[9px]">
            {["home", "aboutNav", "work", "contact"].map((key) => (
              <a
                key={key}
                onClick={() => {
                  handleClick();
                  setMenuOpen(false);
                }}
                href={`#${key}`}
                className="block px-4 py-2 hover:bg-[#030503] hover:text-white transition"
              >
                {t(key)}
              </a>
            ))}

            <select
              className="mt-2 mb-2 bg-white text-[#030503] border border-gray-300 rounded-md px-2 py-1 shadow-sm"
              onChange={handleChange}
              defaultValue={i18n.language}
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>
        )}
      </div>
    </nav>
  );
}
