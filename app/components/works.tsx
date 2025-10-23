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
}



export default function Works() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // evita render en SSR
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



function WorkItem({ Id, Img, Img1, Img2, Img3, Tecnologias, Enlace }: WorkItemProps) {
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
    <div className="w-[90%] flex mx-auto my-10 pt-15">
      <div className="w-[50%] px-10 max-h-[400px] overflow-y-auto scrollbar-custom">
        <h1 className="pb-10 font-black text-[23px] border-b border-gray-400 mb-5">
          {t(`WorksData.${Id}.Name`)}
        </h1>

        <a
          onClick={handleClick}
          href={Enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-2 bg-[#fe612c] hover:bg-[#db5c32] text-secundario rounded-[10px] w-[150px] text-center"
        >
          {t("goToApp")}
        </a>

        <p className="pb-5 pt-5 mt-5 border-t border-gray-400">
          {t(`WorksData.${Id}.ProjectDescription`)}
        </p>

        <h1 className="pb-5 font-black text-[18px]">{t("components")}:</h1>
        <p className="pb-12">{Tecnologias}</p>

        <h1 className="pb-5 font-black text-[18px]">{t("descriptionTechnologies")}:</h1>
        <p className="pb-12">{t(`WorksData.${Id}.TechnologyDescription`)}</p>

        <h1 className="pb-5 font-black text-[18px]">{t("tasksPerformed")}:</h1>
        <p className="pb-12">{t(`WorksData.${Id}.Role`)}</p>

        <h1 className="pb-5 font-black text-[18px]">{t("functionalities")}:</h1>
        <ul className="pb-12 list-disc pl-4">
          {features.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="w-[50%] pl-20">
        <div className="h-[300px] mb-5">
          <Image
            src={selectedImage}
            alt={Id}
            height={900}
            width={900}
            className="object-cover rounded-[10px] h-[300px] w-[430px]"
          />
        </div>

        <div className="flex gap-2">
          {[Img, Img1, Img2, Img3].map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="cursor-pointer border border-transparent hover:border-black rounded-[10px]"
            >
              <Image
                src={img}
                alt={`${Id}-${idx}`}
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
