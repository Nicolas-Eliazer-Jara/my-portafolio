"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import i18n from "../i18n";
import Image from "next/image";



export default function Nav() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [theme , setTheme] = useState(localStorage.getItem("theme")|| "light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node))
        setOpenLang(false);
    };
    window.addEventListener("scroll", onScroll);
    document.addEventListener("click", onClickOutside);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClickOutside);
    };
  }, []);

  if (!mounted) return null;

  const handleClick = () => new Audio("/sound/button-1.wav").play();
  const handleChange = (value: string) => i18n.changeLanguage(value);


  

  const languages = [
    { value: "es", label: "Español" },
    { value: "en", label: "English" },
  ];

  const current = languages.find((l) => l.value === selectedLang)!;

  return (
    <nav className="relative mx-auto w-[95%] z-50">
      <div
        className={`dark:bg-[#f1f0f1] bg-[#030503] fixed z-50 h-[50px] w-[95%]   transition-all duration-300 text-[#030503] py-3  rounded-b-md ${
          scrolled ? "top-0" : "top-12"
        }`}
      >
        <div className="flex items-center justify-between h-full px-5">
          {/* LOGO */}
          <div className="flex flex-col">
            <a
              onClick={handleClick}
              href="#home"
              className="hover:text-[#db5c32] transition-colors duration-300 font-semibold lg:text-[14px] md:text-[10px] text-[10px]"
            >
              Nicolas Eliazer Jara
            </a>
            <p className="text-[#292e29] lg:text-[11px] md:text-[9px] text-[7px]">
              La Pampa, Argentina
            </p>
          </div>

          {/* BOTÓN HAMBURGUESA (móvil) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#030503] hover:text-[#db5c32] focus:outline-none"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* MENÚ PRINCIPAL (desktop) */}
          <div className="hidden md:flex bg-white rounded-lg shadow-sm lg:text-[14px] md:text-[10px]">
            {["home", "aboutNav", "work", "tecnologies","contact"].map((key) => (
              <a
                key={key}
                onClick={handleClick}
                href={`#${key}`}
                className="lg:px-8 md:px-3 py-1 duration-100 hover:bg-[#030503] hover:text-white rounded-lg transition"
              >
                {t(key)}
              </a>
            ))}
          </div>

          

          <div className=" flex items-center">
            {/* SELECTOR DE IDIOMA (desktop personalizado con una sola imagen) */}
          <div
            ref={wrapperRef}
            className="hidden md:block relative lg:text-[12px] md:text-[10px] lg:w-[130px] md:w-[90px]"
          >
            <button
              type="button"
              onClick={() => setOpenLang(!openLang)}
              className="flex items-center w-full bg-white text-[#030503] border border-gray-300 rounded-md lg:px-2 md:px-1 py-1 shadow-sm focus:outline-none hover:text-[#db5c32] transition"
            >
              <Image
                src={theme === "dark" ? "/img/options/LENGUAGEDARK.svg" : "/img/options/LENGUAGELIGTH.svg"}
                width={30}
                height={20}
                alt={theme === "dark" ? "lenguageDark" : "lenguageLight"}
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
              <ul className="absolute left-0 top-full mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-hidden">
                {languages.map((lang) => (
                  <li
                    key={lang.value}
                    onClick={() => {
                      setSelectedLang(lang.value);
                      handleChange(lang.value);
                      handleClick();
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
          
           {/* darkMode DARK */}
           <button onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}  className="ml-4 hover:cursor-pointer ">
            <Image src={theme === "dark" ? "/img/options/SUN.svg" : "/img/options/MOON.svg"} alt={theme === "dark" ? "darkMode" : "ligthMode"} width={100} height={100} className="w-6 h-6  " ></Image>
          </button>
          </div>
        </div>

        {/* MENÚ MÓVIL */}
        {menuOpen && (
          <div className="md:hidden absolute right-0 top-full bg-white rounded-b-lg shadow-lg w-[150px] text-center text-[9px]">
            {["home", "aboutNav", "work", "contact" , "tecnologies"].map((key) => (
              <a
                key={key}
                onClick={() => {
                  handleClick();
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
    </nav>
  );
}
