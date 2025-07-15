"use client";

import { useState } from "react";
import SkillsData from '../data/skillsData';
import Image from "next/image";

export default function Skills() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className=" w-[95%] mx-auto bg-primario text-primario pb-20  py-10 rounded-b-[10px]">
      <h1 className="text-[22px] text-center">tecnologías que manejo</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[90%] mx-auto mt-10 ">
        {SkillsData.map(({ img, title, desc, descTwo }, i) => (
          <div
            key={i}
            className={` border-secundario  text-[#292e29]  m-1  border p-7 rounded-[5px] cursor-pointer hover:border-[#db5c32]  transition-colors duration-1000  ${
              selected === i
                ? "border-[#db5c32]"
                : "hover:opacity-95  border-secundario"
            }`}
            onClick={() => setSelected(selected === i ? null : i)}
          >
            {selected === i ? (
              // ✅ Solo muestra descTwo si está seleccionado
              <p className="whitespace-pre-line ">{descTwo}</p>
            ) : (
              <>
                <div className="flex ">
                  <Image
                    src={img}
                    alt={title}
                    width={40}
                    height={40}
                    className="rounded-[4px]"
                  />
                  <h1 className="text-[32px] hover:text-[#db5c32] pl-3">{title}</h1>
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
