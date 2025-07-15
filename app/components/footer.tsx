import Contact from "../data/contact";
import Image from "next/image";
export default function Footer() {
  const language = navigator.language;
  const year = new Date().getFullYear();

  return (
    <>
      <section id="contact">
        <div className=" pt-5 font-inter mt-10 w-[95%] mx-auto rounded-[10px]  mb-5 bg-[#030503] text-[#f1f0f1]">
          <div className=" w-[90%] mx-auto border-b-[1px] border-[#db5c32]">
            <h1 className="text-[17px] text-center pb-5">Nicolas Eliazer Jara</h1>
          </div>
          <div className="flex justify-center mt-5 ">
          {Contact.map(({ img,link, title }, i) => (
            <div className="p-7 " key={i}>
              <a href={link} target="_blank" rel="noopener noreferrer">
              <Image
                src={img}
                alt={title}
                width={20}
                height={20}
                className=""
              />
              </a>
            </div>
          ))}
        </div>

        <div className="flex text-[14px] p-5 justify-center">
          <p className=" p-2">© 2025 Nicolas Eliazer Jara. Todos los derechos reservados</p>
          <p className=" p-2">{language}</p>
          <p className=" p-2">{year}</p>
        </div>

        </div>
      </section>
    </>
  );
}
