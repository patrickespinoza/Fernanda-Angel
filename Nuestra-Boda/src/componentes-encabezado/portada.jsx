import React from "react";

export default function Portada() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* FOTO */}
      <img
        src="/portada.jpg"
        alt="Fernanda y Ángel"
        className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
      />

      {/* Degradado para mejorar lectura */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/30"></div>

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
          px-6
          pb-3
          pt-3
          text-center

          sm:pb-3
          sm:pt-3

          md:pb-3
          md:pt-3
        "
      >
        {/* NOMBRES EN LA PARTE SUPERIOR */}
        <h1
          className="
            font-cursiveDancing
            text-5xl
            leading-none
            text-white
            drop-shadow-2xl

            sm:text-7xl
            md:text-8xl
            lg:text-[7rem]
          "
        >
          Fernanda & Ángel
        </h1>

        {/* FECHA EN LA PARTE INFERIOR */}
        <div className="flex items-center justify-center gap-5 text-white sm:gap-7">

          <div className="h-px w-10 bg-white/70 sm:w-16"></div>

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

          <div className="h-px w-10 bg-white/70 sm:w-16"></div>

        </div>
      </div>
    </section>
  );
}