'use client'

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export default function Home() {

  const { t } = useTranslation()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home">
      <div className="font-inter relative w-[95%] mx-auto mt-9 md:h-[620px] h-[420px] z-10 overflow-hidden">
        <div className="relative bg-[rgb(var(--color-fondo))] text-[rgb(var(--color-texto))] transition-all duration-300 rounded-t-[10px] z-20 md:pl-[100px] pl-[5] md:pt-[330px] pt-[230px] backdrop-brightness-65 w-full h-full">
          
          <div className="flex">
            <h1 className="lg:text-[75px] md:text-[55px] text-[25px] font-semibold font-inter pt-1">
              Frontend Developer
            </h1>
            <h1 className="lg:text-[75px] md:text-[55px] text-[25px] font-semibold font-inter pt-1 text-[#db5c32]">
              .
            </h1>
          </div>

          <p className="lg:text-[15px] md:text-[12px] text-[9px] pt-1 md:pr-20 pr-3">
            {t("title")}
          </p>

        </div>
      </div>
    </section>
  )
}