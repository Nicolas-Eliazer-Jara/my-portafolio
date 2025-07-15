"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="relative z-50">
        <div
          className={`backdrop-blur fixed z-50 h-[50px] w-[94%] mx-9 transition-all duration-300 text-[#030503] pb-3 ${
            scrolled ? "top-0" : "top-12"
          }`}
        >
          <div className="relative h-full flex items-center pl-7 pr-8 mt-1">
            <div className="flex flex-col">
              <a className="hover:text-[#db5c32]" href="#home">Nicolas Eliazer Jara</a>
              <p className="text-[#292e29] text-[12px]">La Pampa, Argentina</p>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 text-[16px]">
              <ul className="flex bg-white rounded-l-[10px] rounded-r-[10px]">
                <a href="#home" className="px-6 bg-white rounded-l-[10px] hover:bg-[#030503] hover:text-white hover:rounded-[10px]">Home</a>
                <a href="#about" className="px-6 bg-white hover:bg-[#030503] hover:text-white hover:rounded-[10px]">About</a>
                <a href="#work" className="px-6 bg-white hover:bg-[#030503] hover:text-white hover:rounded-[10px]">Work</a>
                <a href="#contact" className="px-6 bg-white rounded-r-[10px] hover:bg-[#030503] hover:text-white hover:rounded-[10px]">Contact</a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
