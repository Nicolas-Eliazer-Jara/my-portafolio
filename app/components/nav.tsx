"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import i18n from "../i18n";
import Image from "next/image";
import { useTheme } from "../hook/usetheme";
import { useScroll } from "../hook/useScroll";
import { useOutsideClick } from "../hook/useOutsideClick";
import { useAudio } from "../hook/useAudio";
import {motion} from 'framer-motion'

export default function Nav() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const { theme, toggleTheme } = useTheme();
  const scrolled = useScroll();
  const playClick = useAudio("/sound/button-1.wav");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOutsideClick(wrapperRef, () => setOpenLang(false));
  
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleChange = (value: string) => i18n.changeLanguage(value);

  const languages = [
    { value: "es", label: "Español" },
    { value: "en", label: "English" },
  ];

  const current = languages.find((l) => l.value === selectedLang)!;
  return (
    <nav className="relative mx-auto w-[95%] z-50">
      <motion.div
      className="hidden md:flex text-exception shadow-lg shadow-black/30 bg-white rounded-md lg:text-[14px] md:text-[10px]"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div
        className={`bg-fondo text-fondo fixed z-50 h-[50px] w-[95%] transition-all duration-300 py-3 rounded-b-md ${
          scrolled ? "top-0" : "top-12"
        }`}
      >
        <div className="flex items-center justify-between h-full px-5">
          {/* LOGO */}
          <div className="flex flex-col">
            <a
              onClick={playClick}
              href="#home"
              className="hover:text-[#db5c32] transition-colors duration-300 font-semibold lg:text-[14px] md:text-[10px] text-[10px]"
            >
              Nicolas Eliazer Jara
            </a>
            <p className=" lg:text-[11px] md:text-[9px] text-[7px]">
              La Pampa, Argentina
            </p>
          </div>

          {/* BOTÓN HAMBURGUESA */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden hover:text-[#db5c32] focus:outline-none"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* MENÚ DESKTOP */}
          <motion.div 
          className="hidden md:flex  text-exception shadow-lg shadow-black/3   bg-white rounded-md  lg:text-[14px] md:text-[10px]"
          >
          
            {["home", "aboutNav", "work", "tecnologies", "contact"].map((key) => (
              <motion.div
              key={key}
              whileHover={{
                scale: 1.08,
                boxShadow: " rgb(219, 93, 50)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              >
              <a
                key={key}
                onClick={playClick}
                href={`#${key}`}
                className="lg:px-8 md:px-3 py-1 duration-100 hover:shadow-lg hover:shadow-[#fe612c]/70 hover:bg-[#030503] hover:text-white rounded-lg transition "
              >
                {t(key)}
              </a>
              </motion.div>
            ))}
          </motion.div>

          {/* IDIOMA + DARK MODE */}
          <div className="flex items-center">
            <div
              ref={wrapperRef}
              className="hidden md:block relative lg:text-[12px] md:text-[10px] lg:w-[130px] md:w-[90px]"
            >
              <button
                type="button"
                onClick={() => setOpenLang(!openLang)}
                className="flex items-center w-full  border border-gray-300 rounded-md lg:px-2 md:px-1 py-1 shadow-sm focus:outline-none hover:text-[#db5c32] transition"
              >
                <Image
                  src={
                    theme === "dark"
                      ? "/img/options/LENGUAGELIGTH.svg"
                      : "/img/options/LENGUAGEDARK.svg"
                  }
                  width={30}
                  height={20}
                  alt="language"
                  className="lg:w-[30px] lg:h-[23px] md:w-5 md:h-[13px] md:mr-1 lg:mr-2"
                />
                <span className="flex-1 text-left">{current.label}</span>
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform ${
                    openLang ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
                </svg>
              </button>

              {openLang && (
                <ul className="absolute left-0 top-full mt-1 w-full  border border-gray-200 rounded-md shadow-lg z-50 overflow-hidden">
                  {languages.map((lang) => (
                    <li
                      key={lang.value}
                      onClick={() => {
                        setSelectedLang(lang.value);
                        handleChange(lang.value);
                        playClick();
                        setOpenLang(false);
                      }}
                      className={`px-3 py-2 cursor-pointer transition-colors duration-150 ${
                        selectedLang === lang.value
                          ? "bg-[#030503] text-[#db5c32]"
                          : "hover:bg-[#030503]/80 hover:text-white"
                      }`}
                    >
                      {lang.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* BOTÓN DARK/LIGHT */}
            <button onClick={toggleTheme} className="ml-4 hover:cursor-pointer">
              <Image
                src={
                  theme === "dark"
                    ? "/img/options/MOON.svg"
                    : "/img/options/SUN.svg"
                }
                alt={theme === "dark" ? "darkMode" : "lightMode"}
                width={100}
                height={100}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* MENÚ MÓVIL */}
        {menuOpen && (
          <div className="md:hidden absolute right-0 top-full text-[#030503] bg-white rounded-b-lg shadow-lg w-[150px] text-center text-[9px]">
            {["home", "aboutNav", "work", "contact", "tecnologies"].map((key) => (
              <a
                key={key}
                onClick={() => {
                  playClick();
                  setMenuOpen(false);
                }}
                href={`#${key}`}
                className="block px-4 py-2 hover:bg-[#030503] hover:text-white transition duration-100"
              >
                {t(key)}
              </a>
            ))}
            <select
              className="mt-2 mb-2 bg-white text-[#030503] border border-gray-300 rounded-md px-2 py-1 shadow-sm"
              onChange={(e) => handleChange(e.target.value)}
              defaultValue={i18n.language}
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>
        )}
      </div>
      </motion.div>
    </nav>
  );
}
