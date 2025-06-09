import Image from "next/image";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="">
      <div className="flex mt-10  w-[90%] mx-auto  ">
        <div className="w-[50%] h-[620px]  relative">
          <Image
            src="/img/2001.jpg"
            alt="fondo"
            className="hover:opacity-100 rounded-l-[15px]  object-cover"
            fill
            priority
          />
        </div>
        <div className=" bg-black  w-[50%] rounded-r-[15px]  flex justify-center pt-[25px] h-[620px]">
          <h1 className="text-[#E0E9EE]  font-black font-sans w-[70%] text-[20px]">
            Hola, soy [Tu Nombre], desarrollador frontend con enfoque en crear
              interfaces modernas, accesibles y responsivas. Trabajo con
              tecnologías como React, TypeScript y TailwindCSS, y estoy en
              constante aprendizaje para mejorar mis habilidades y estar al día
              con las mejores prácticas del desarrollo web. Me apasiona
              transformar ideas en experiencias visuales claras y funcionales.
              He trabajado en proyectos personales que reflejan mi compromiso
              con el código limpio, la organización y la usabilidad.
            </h1>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
