import React from "react";

export default function Portada() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* FOTO */}
      <img
        src="/portada.jpg"
        alt="Fernanda y Ángel"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[center_35%]
        "
      />

      {/* DEGRADADO PARA MEJORAR LA LECTURA */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-black/10
          to-black/40
        "
      />

      {/* CONTENIDO */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          items-center
          justify-between
          px-5
          pb-3
          text-center

          sm:px-8
          sm:pb-3

          md:pb-3
        "
      >
        {/* NOMBRES */}
        <div
          className="
            mt-[11vh]
            flex
            w-full
            max-w-6xl
            flex-col
            items-center
            justify-center

            sm:mt-[12vh]
            md:mt-[13vh]
            md:flex-row
            md:gap-5

            lg:mt-[14vh]
          "
        >
          <span
            className="
              font-playfair
              text-[2.9rem]
              font-medium
              leading-none
              tracking-[0.04em]
              text-white
              drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]

              sm:text-6xl

              md:text-7xl
              md:tracking-[0.02em]

              lg:text-[5.8rem]
            "
          >
            Fernanda
          </span>

          <span
            className="
              my-2
              font-playfair
              text-3xl
              font-light
              italic
              leading-none
              text-white/90
              drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]

              sm:text-4xl

              md:my-0
              md:text-5xl

              lg:text-6xl
            "
          >
            &
          </span>

          <span
            className="
              font-playfair
              text-[2.9rem]
              font-medium
              leading-none
              tracking-[0.04em]
              text-white
              drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]

              sm:text-6xl

              md:text-7xl
              md:tracking-[0.02em]

              lg:text-[5.8rem]
            "
          >
            Ángel
          </span>
        </div>

        {/* FECHA EN LA PARTE INFERIOR */}
        <div className="flex items-center justify-center gap-5 text-white sm:gap-7">

          <div className="h-px w-10 bg-white/70 sm:w-16" />

          <div className="flex flex-col items-center font-playfair">
            <span className="text-3xl leading-none sm:text-4xl">
              17
            </span>

            <span className="mt-2 text-sm uppercase tracking-[0.3em] sm:text-base">
              Octubre
            </span>

            <span className="mt-2 text-base tracking-[0.35em] sm:text-lg">
              2026
            </span>
          </div>

          <div className="h-px w-10 bg-white/70 sm:w-16" />

        </div>
      </div>
    </section>
  );
}