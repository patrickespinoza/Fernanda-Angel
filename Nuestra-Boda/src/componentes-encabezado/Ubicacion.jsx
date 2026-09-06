import React from "react";
import { motion } from "framer-motion";

const Celebracion = ({
  titulo = "Celebración",
  fecha = "Sábado 17 de octubre de 2026",
  hora = "6:30 PM",
  lugar = "Jardín Coral",
  direccion = "San Felipe, Baja California",
  ubicacion = "https://maps.app.goo.gl/aXfNHKwUUnnAeTyKA",
}) => {
  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#FFF9EF]
        px-5
        py-20

        sm:px-8
        sm:py-24

        md:py-28
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 45,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="
          relative
          mx-auto
          max-w-5xl
          overflow-visible
          rounded-[2rem]
          border
          border-[#78866B]/45
          bg-[#FFFDF8]/90
          px-6
          pb-36
          pt-14
          text-center
          shadow-[0_24px_65px_rgba(89,102,77,0.14)]

          sm:rounded-[2.5rem]
          sm:px-12
          sm:pb-40
          sm:pt-16

          md:px-16
          md:pb-32
          md:pt-20
        "
      >
        {/* CONTENIDO */}
        <div className="relative z-20">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="
              mb-4
              font-playfair
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#78866B]

              sm:text-sm
            "
          >
            Nuestro día especial
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="
              font-cursiveDancing
              text-5xl
              leading-none
              text-[#59664D]

              sm:text-6xl
              md:text-7xl
            "
          >
            {titulo}
          </motion.h2>

          {/* SEPARADOR */}
          <div className="my-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#78866B]/65 sm:w-20" />

            <span className="text-xl text-[#78866B]">
              ❧
            </span>

            <span className="h-px w-12 bg-[#78866B]/65 sm:w-20" />
          </div>

          {/* FECHA */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            viewport={{ once: true }}
            className="
              mx-auto
              max-w-xl
              rounded-3xl
              border
              border-[#78866B]/45
              bg-[#FFF9EF]
              px-6
              py-7
            "
          >
            <p
              className="
                mb-3
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#78866B]

                sm:text-sm
              "
            >
              Fecha
            </p>

            <p
              className="
                font-playfair
                text-2xl
                leading-relaxed
                text-[#59664D]

                sm:text-3xl
              "
            >
              {fecha}
            </p>

            {hora && (
              <>
                <div className="mx-auto my-5 h-px w-16 bg-[#78866B]/40" />

                <p
                  className="
                    font-playfair
                    text-xl
                    text-[#59664D]

                    sm:text-2xl
                  "
                >
                  {hora}
                </p>
              </>
            )}
          </motion.div>

          {/* UBICACIÓN */}
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
              duration: 0.8,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-2xl"
          >
            <p
              className="
                mb-3
                font-cursiveDancing
                text-4xl
                text-[#F26F5B]

                sm:text-5xl
              "
            >
              Ubicación
            </p>

            <h3
              className="
                mb-4
                font-playfair
                text-3xl
                text-[#59664D]

                sm:text-4xl
              "
            >
              {lugar}
            </h3>

            <p
              className="
                text-base
                leading-relaxed
                text-[#59664D]/80

                sm:text-lg
              "
            >
              {direccion}
            </p>
          </motion.div>

          {/* BOTÓN */}
          <motion.a
            href={ubicacion}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.35,
            }}
            viewport={{ once: true }}
            className="
              relative
              z-30
              mt-10
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#F26F5B]
              px-9
              py-4
              font-playfair
              text-base
              tracking-wide
              text-white
              shadow-[0_14px_30px_rgba(242,111,91,0.28)]
              transition-colors
              hover:bg-[#DF604E]

              sm:px-11
              sm:text-lg
            "
          >
            Ver ubicación
          </motion.a>
        </div>

        {/* TORONJA — INFERIOR IZQUIERDA */}
        <motion.img
          src="/toronja.png"
          alt=""
          aria-hidden="true"
          initial={{
            opacity: 0,
            x: -35,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="
            pointer-events-none
            absolute
            z-10
            select-none
            object-contain

            -bottom-5
            -left-12
            w-[350px]

            sm:-bottom-14
            sm:-left-12
            sm:w-[245px]

            md:-bottom-16
            md:-left-16
            md:w-[310px]

            lg:-bottom-20
            lg:-left-20
            lg:w-[570px]
          "
        />

        {/* UVAS — INFERIOR DERECHA */}
        <motion.img
          src="/uva.png"
          alt=""
          aria-hidden="true"
          initial={{
            opacity: 0,
            x: 35,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.35,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="
            pointer-events-none
            absolute
            z-10
            select-none
            object-contain

            -bottom-12
            -right-5
            w-[300px]

            sm:-bottom-14
            sm:-right-12
            sm:w-[235px]

            md:-bottom-16
            md:-right-16
            md:w-[300px]

            lg:-bottom-20
            lg:-right-20
            lg:w-[550px]
          "
        />
      </motion.div>
    </section>
  );
};

export default Celebracion;