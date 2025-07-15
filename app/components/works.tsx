"use client";
import WorksData from "../data/works";
import Image from "next/image";
import { useState } from "react";

export default function Works() {
  return (
    <section id="work">
      <div className="w-[95%] mx-auto bg-primario text-secundario pt-10 mb-10 pb-10">
        {WorksData.map((work, i) => (
          <WorkItem key={i} {...work} />
        ))}
      </div>
    </section>
  );
}

function WorkItem({
  Nombre,
  Img,
  Img1,
  Img2,
  Img3,
  ProyectoDescripcion,
  Tecnologias,
  TecnologiaDescripcion,
  Funcionalidades,
  Rol,
  Enlace,
}: any) {
  const [selectedImage, setSelectedImage] = useState<string>(Img); // estado propio por proyecto

  return (
    <div className="w-[90%] flex mx-auto my-10 pt-15">
      <div className="w-[50%] px-10 max-h-[400px] overflow-y-auto scrollbar-custom ">
        <p className="pb-10 font-black text-[23px] border-b border-gray-400 mb-5">
          {Nombre}
        </p>
        <a
          href={Enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-2 bg-[#fe612c] hover:bg-[#db5c32] text-secundario rounded-[10px] w-[150px] text-center"
        >
          Ir a la App
        </a>

        <p className="pb-5 pt-5 mt-5 border-t border-gray-400">
          {ProyectoDescripcion}
        </p>
        <p className="pb-5 font-black text-[18px]">Componentes:</p>
        <p className="pb-12">{Tecnologias}</p>
        <p className="pb-5 font-black text-[18px]">
          Descripcion de tecnologias usadas:
        </p>
        <p className="pb-12">{TecnologiaDescripcion}</p>
        <p className="pb-5 font-black text-[18px]">Tareas realizadas:</p>
        <p className="pb-12">{Rol}</p>
        <p className="pb-5 font-black text-[18px]">Funcionalidades:</p>
        <ul className="pb-12 list-disc pl-4">
          {Funcionalidades.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="w-[50%] pl-20">
        <div className="h-[300px] mb-5">
          <Image
            src={selectedImage}
            alt={Nombre}
            height={900}
            width={900}
            className="object-cover rounded-[10px] h-[300px] w-[430px] "
          />
        </div>

        <div className="flex gap-2">
          {[Img1, Img2, Img3, Img].map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="cursor-pointer border border-transparent hover:border-black rounded-[10px]"
            >
              <Image
                src={img}
                alt={`${Nombre}-${idx}`}
                height={100}
                width={100}
                className="object-cover rounded-[10px] h-[80px] w-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
