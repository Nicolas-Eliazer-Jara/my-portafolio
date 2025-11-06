"use client";
import WorksData from "../data/works";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface WorkItemProps {
  Id: string;
  Img: string;
  Img1: string;
  Img2: string;
  Img3: string;
  Tecnologias: string;
  Enlace: string;
  Background: string;
}

export default function Works() {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // evita render en SSR
  return (
    <section id="work">
      <div className="w-[95%] mx-auto bg-fondo text-fondo mt-10 pt-10 mb-10 pb-10 rounded-lg transition-all duration-300">
        <div className="text-center mb-12 ">
          <h2 className="lg:text-[25px] md:text-[22px] text-[14px] font-bold ">
            {t("projectsTitle")}
          </h2>
          <p className="lg:text-[15px] md:text-[12px] text-[9px]   mt-2">
            {t("projectsSubTitle")}
          </p>
        </div>

        {WorksData.map((work, i) => (
          <WorkItem key={i} {...work} />
        ))}
      </div>
    </section>
  );
}

function WorkItem({
  Id,
  Img,
  Img1,
  Img2,
  Img3,
  Tecnologias,
  Enlace,
  Background,
}: WorkItemProps) {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(Img);

  // Funcionalidades desde i18n
  const featuresRaw = t(`WorksData.${Id}.Features`, { returnObjects: true });
  const features = Array.isArray(featuresRaw) ? featuresRaw : [];

  const handleClick = () => {
    const boton = new Audio("/sound/button-2.wav");
    boton.play();
  };

  return (
    <div className="w-[90%] sm:flex  mx-auto my-10 pt-15">
      <div className=" mr-5 sm:w-[50%] px-10 max-h-[400px] overflow-y-auto scrollbar-custom">
        <h1 className="pb-10 font-black lg:text-[17px] md:text-[13px] text-[10px] border-b border-gray-400 mb-5">
          {t(`WorksData.${Id}.Name`)}
        </h1>

        <a
          onClick={handleClick}
          href={Enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-2 hover:bg-[#fe612c] hover:text-white border-2 transition-colors duration-300 border-[#fe612c]  active:bg-[#e25829]  rounded-[10px] lg:w-[150px] md:w-[110px] w-[70px] lg:text-[15px] md:text-[12px] text-[9px] text-center shadow-lg   "
        >
          {t("goToApp")}
        </a>

        <p className="pb-5 pt-5 mt-5 border-t border-gray-400 lg:text-[15px] md:text-[12px] text-[9px]">
          {t(`WorksData.${Id}.ProjectDescription`)}
        </p>

        <h1 className="pb-5 font-black lg:text-[17px] md:text-[13px] text-[10px]">
          {t("components")}:
        </h1>
        <p className="pb-12 lg:text-[15px] md:text-[12px] text-[9px]">
          {Tecnologias}
        </p>

        <h1 className="pb-5 font-black lg:text-[17px] md:text-[13px] text-[10px]">
          {t("descriptionTechnologies")}:
        </h1>
        <p className="pb-12 lg:text-[15px] md:text-[12px] text-[9px]">
          {t(`WorksData.${Id}.TechnologyDescription`)}
        </p>

        <h1 className="pb-5 font-black lg:text-[17px] md:text-[13px] text-[10px]">
          {t("tasksPerformed")}:
        </h1>
        <p className="pb-12 lg:text-[15px] md:text-[12px] text-[9px]">
          {t(`WorksData.${Id}.Role`)}
        </p>

        <h1 className="pb-5 font-black lg:text-[17px] md:text-[13px] text-[10px]">
          {t("functionalities")}:
        </h1>
        <ul className="pb-12 lg:text-[15px] md:text-[12px] text-[9px] list-disc pl-4">
          {features.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div
  className="sm:w-[50%]  mt-5 lg:mt-0 md:mt-10 w-full h-full rounded-[10px] p-4 flex flex-col items-center justify-center"
  style={{ background: Background }}
>
  <div className="mb-5 overflow-hidden w-full  flex justify-center">
    <Image
      src={selectedImage}
      alt={Id}
      height={900}
      width={900}
      className="object-contain rounded-[10px] lg:h-[300px] md:h-[250px] w-[470px] transition-transform duration-300 hover:scale-110"
    />
  </div>

  <div className="flex gap-2 justify-center">
    {[Img, Img1, Img2, Img3].map((img, idx) => (
      <div
        key={idx}
        onClick={() => setSelectedImage(img)}
        className="cursor-pointer "
      >
        <Image
          src={img}
          alt={`${Id}-${idx}`}
          height={100}
          width={100}
          className="object-contain rounded-[5px] h-[58px]  w-[100px]"
        />
      </div>
    ))}
  </div>


      </div>
    </div>
  );
}
