import React from "react";
import { motion } from "framer-motion";

const Final = ({
  imagen = "/Final.jpg",
  descripcion = "Fernanda y Ángel",
  posicion = "center center",
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="
        relative
        h-screen
        min-h-[600px]
        w-full
        overflow-hidden
        bg-black
        supports-[height:100svh]:h-[100svh]
      "
    >
      {/* IMAGEN A PANTALLA COMPLETA */}
      <img
        src={imagen}
        alt={descripcion}
        loading="lazy"
        style={{
          objectPosition: posicion,
        }}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* DEGRADADO INFERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[38%]
          bg-gradient-to-t
          from-black/65
          via-black/20
          to-transparent
        "
      />

      {/* INICIALES */}
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        viewport={{ once: true }}
        className="
          absolute
          inset-x-0
          bottom-12
          z-10
          flex
          justify-center
          px-5
          text-center

          sm:bottom-16
          md:bottom-20
        "
      >
        <p
          className="
            font-cursiveDancing
            text-6xl
            leading-none
            text-white
            drop-shadow-[0_4px_14px_rgba(0,0,0,0.65)]

            sm:text-7xl
            md:text-8xl
            lg:text-[7rem]
          "
        >
          F & A
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Final;