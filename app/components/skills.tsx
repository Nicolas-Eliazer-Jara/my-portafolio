"use client";

import { useState } from "react";
import SkillsData from '../data/skillsData';
import Image from "next/image";

export default function Skills() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="text-[#E0E9EE]  w-full py-10">
      <h1 className="text-[22px] text-center">tecnologías que manejo</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[90%] mx-auto font-serif mt-10">
        {SkillsData.map(({ img, title, desc, descTwo }, i) => (
          <div
            key={i}
            className={`bg-black rounded-xl m-1 border p-7 transition duration-200 cursor-pointer ${
              selected === i
                ? "bg-[linear-gradient(to_bottom,_#facc15,_#facc15,_#facc15,_#7c3aed)]  text-violet-900"
                : "hover:bg-yellow-300 hover:text-violet-900 border-[#e0e9ee5b]"
            }`}
            onClick={() => setSelected(selected === i ? null : i)}
          >
            {selected === i ? (
              // ✅ Solo muestra descTwo si está seleccionado
              <p className="whitespace-pre-line">{descTwo}</p>
            ) : (
              <>
                <div className="flex ml-3">
                  <Image
                    src={img}
                    alt={title}
                    width={40}
                    height={40}
                    className="rounded-[4px]"
                  />
                  <h1 className="text-[32px] pl-3">{title}</h1>
                </div>
                <p className="pt-3">{desc}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
