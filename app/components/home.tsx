export default function Home() {
  return (
    <>
      <section id="home">
      <div className="relative w-full h-[620px] z-10 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/background.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>

        <div className="relative z-20 pl-[100px] pt-[330px] backdrop-brightness-65   w-full h-[100%]">
          <div className=" text-yellow-300">
            <h3 className="text-[15px] pt-1">Hola mi nombre es Nicolas</h3>
            <h1 className="text-[75px] font-black pt-1">Frontend Developer.</h1>
            <h2 className="text-[19px] pt-1">
              Soy un desarrollador Front-End junior, apasionado por la
              tecnología, siempre estoy aprendiendo algo nuevo. Hace tres años
              que hago páginas web.
            </h2>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
