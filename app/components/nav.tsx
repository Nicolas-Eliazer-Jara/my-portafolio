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
import { motion } from "framer-motion";

export default function Nav() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const { theme, toggleTheme } = useTheme();
  const scrolled = useScroll();
  const playClick = useAudio("/sound/button-1.wav");
  const wrapperRef = useRef<HTMLDivElement | null>(null);

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
        className="flex flex-col text-exception shadow-lg shadow-black/30 bg-white rounded-md"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className={`bg-fondo text-fondo fixed z-50 h-[60px] w-[95%] transition-all duration-300 py-3 rounded-b-md ${
            scrolled ? "top-0" : "top-12"
          }`}
        >
          <div className="flex items-center justify-between h-full px-5">
            {/* LOGO IZQUIERDA */}
            <div className="flex flex-col">
              <a
                 href="#home"
                onClick={playClick}
                className="font-semibold lg:text-[14px] text-[10px] hover:text-[#db5c32] transition cursor-pointer"
              >
                Nicolas Eliazer Jara
              </a>
              <p className="lg:text-[10px] text-[7px]">La Pampa, Argentina</p>
            </div>

            {/* MENÚ CENTRADO */}
            <div className="hidden md:flex justify-center flex-1">
              <div className="flex justify-center items-center gap-6 lg:text-[13px] text-[10px]">
                {["home", "aboutNav", "work", "tecnologies", "contact"].map(
                  (key) => (
                    <motion.a
                      key={key}
                      href={`#${key}`}
                      onClick={playClick}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1 rounded-md hover:bg-[#030503] hover:text-white transition"
                    >
                      {t(key)}
                    </motion.a>
                  )
                )}
              </div>
            </div>

            {/* BOTONES DERECHA */}
            <div className="flex items-center gap-3">
              {/* MÓVIL */}
              <div className="flex md:hidden items-center gap-3">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="hover:text-[#db5c32] focus:outline-none"
                >
                  {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
                <button onClick={toggleTheme} className="hover:cursor-pointer">
                  <Image
                    src={
                      theme === "dark"
                        ? "/img/options/MOON.svg"
                        : "/img/options/SUN.svg"
                    }
                    alt="theme"
                    width={24}
                    height={24}
                  />
                </button>
              </div>

              {/* DESKTOP */}
              <div className="hidden md:flex items-center gap-3">
                {/* Selector idioma */}
                <div ref={wrapperRef} className="relative  text-[12px]">
                  <button
                    onClick={() => setOpenLang(!openLang)}
                    className="flex  items-center border border-gray-300 rounded-md px-2 py-1 hover:text-[#db5c32] transition"
                  >
                    <Image
                      src={
                        theme === "dark"
                          ? "/img/options/LENGUAGELIGTH.svg"
                          : "/img/options/LENGUAGEDARK.svg"
                      }
                      width={22}
                      height={16}
                      alt="language"
                      className="mr-1 "
                    />
                    <span>{current.label}</span>
                    <svg
                      className={`w-3 h-3 ml-1 transition-transform ${
                        openLang ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
                    </svg>
                  </button>

                  {openLang && (
                    <ul className="absolute bg-fondo text-fondo left-0 top-full mt-1 w-full border border-gray-200 rounded-md shadow-lg bg-white z-50">
                      {languages.map((lang) => (
                        <li
                          key={lang.value}
                          onClick={() => {
                            setSelectedLang(lang.value);
                            handleChange(lang.value);
                            setOpenLang(false);
                            playClick();
                          }}
                          className={`px-3 py-2 cursor-pointer ${
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

                {/* Dark mode */}
                <button onClick={toggleTheme} className="hover:cursor-pointer">
                  <Image
                    src={
                      theme === "dark"
                        ? "/img/options/MOON.svg"
                        : "/img/options/SUN.svg"
                    }
                    alt="theme"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* MENÚ MÓVIL */}
          {menuOpen && (
            <div className="md:hidden absolute right-0 top-full text-[#030503] bg-white rounded-b-lg shadow-lg w-[150px] text-center text-[10px]">
              {["home", "aboutNav", "work", "tecnologies", "contact"].map(
                (key) => (
                  <a
                    key={key}
                    href={`#${key}`}
                    onClick={() => {
                      playClick();
                      setMenuOpen(false);
                    }}
                    className="block px-4 py-2 hover:bg-[#030503] hover:text-white transition"
                  >
                    {t(key)}
                  </a>
                )
              )}
            </div>
          )}
        </div>
      </motion.div>
    </nav>
  );
}
