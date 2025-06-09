"use client";
import WorksData from "../data/works";
import Image from "next/image";
export default function Works() {
  return (
    <>
      <section id="work">
        <div className="w-full h-[550px] bg-gradient-to-t from-[#010001] to-[#1D0D41] pt-40 ">
          {WorksData.map(
            ({ Nombre, Img, Descripción, Tecnologías, Rol, Enlace }, i) => (
              <div key={i} className="w-[90%] h-[400px] flex  mx-auto ">
                <div className="w-[50%] text-violet-900 pl-10 pt-20 text-[17px] h-[100%] bg-amber-300  rounded-l-[20px]">
                  <p className="pb-5">Nombre: {Nombre}</p>
                  <p  className="pb-5">Descripcion: {Descripción}</p>
                  <p  className="pb-5">Tecnologias: {Tecnologías}</p>
                  <p  className="pb-5">Rol: {Rol}</p>
                  <a  href={Enlace}> 
                    <p className="bg-violet-950 p-2  rounded-[10px] text-white hover:bg-violet-900 text-center" >Ir a la App</p>
                  </a>
                </div>
                <div className="w-[50%] flex justify-center items-center h-[100%] bg-gradient-to-r from-amber-300 to-violet-950 rounded-r-[20px]">
                  <Image
                    src={Img}
                    alt={Nombre}
                    width={500}
                    height={500}
                    className="rounded-[4px]"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}
