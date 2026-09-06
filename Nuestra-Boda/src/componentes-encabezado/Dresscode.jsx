import React from "react";
import { motion } from "framer-motion";

const Vestimenta = () => {
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
          y: 50,
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
          max-w-4xl
          overflow-hidden
          rounded-[2rem]
          border
          border-[#78866B]/40
          bg-[#FFFDF8]/90
          px-5
          py-20
          text-center
          shadow-[0_24px_65px_rgba(89,102,77,0.14)]

          sm:rounded-[2.5rem]
          sm:px-12
          sm:py-24

          md:px-16
          md:py-28

          lg:px-20
        "
      >
        {/* FLOR SUPERIOR IZQUIERDA */}
        <motion.img
          src="/flor3.png"
          alt=""
          aria-hidden="true"
          initial={{
            opacity: 0,
            x: -35,
            y: -25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="
            pointer-events-none
            absolute
            z-0
            select-none
            object-contain

            -left-2
            -top-1
            w-[170px]
            opacity-80

            sm:-left-16
            sm:-top-20
            sm:w-[260px]
            sm:opacity-90

            md:-left-20
            md:-top-24
            md:w-[330px]

            lg:-left-5
            lg:-top-10
            lg:w-[390px]
            lg:opacity-100
          "
        />

        {/* FLOR INFERIOR DERECHA */}
        <motion.img
          src="/flor4.png"
          alt=""
          aria-hidden="true"
          initial={{
            opacity: 0,
            x: 35,
            y: 25,
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
            z-0
            rotate-180
            select-none
            object-contain

            -bottom-8
            -right-2
            w-[150px]
            opacity-80

            sm:-bottom-20
            sm:-right-16
            sm:w-[245px]
            sm:opacity-90

            md:-bottom-24
            md:-right-20
            md:w-[315px]

            lg:-bottom-28
            lg:-right-9
            lg:w-[470px]
            lg:opacity-100
          "
        />

        {/* CONTENIDO */}
        <div className="relative z-10 mx-auto max-w-2xl">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#78866B]

              sm:text-sm
            "
          >
            Nuestro día
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
              mt-5
              font-cursiveDancing
              text-[2.7rem]
              leading-[1.1]
              text-[#59664D]

              sm:text-6xl
              md:text-7xl
            "
          >
            Código de Vestimenta
          </motion.h2>

          {/* SEPARADOR */}
          <div className="my-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#78866B]/60 sm:w-20" />

            <span className="text-xl text-[#78866B]">
              ❧
            </span>

            <span className="h-px w-12 bg-[#78866B]/60 sm:w-20" />
          </div>

          {/* COLORES PASTEL */}
          <motion.div
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
              delay: 0.3,
            }}
            viewport={{ once: true }}
          >
            <h3
              className="
                font-playfair
                text-3xl
                text-[#59664D]

                sm:text-4xl
              "
            >
              Colores pastel
            </h3>

            <p
              className="
                mx-auto
                mt-5
                max-w-xl
                font-playfair
                text-base
                leading-7
                text-[#59664D]/85

                sm:text-lg
                sm:leading-8
              "
            >
              Puedes elegir tonos pastel como rosa, lila, verde, amarillo,
              durazno o coral.
            </p>

            {/* IMAGEN DE EJEMPLOS */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              viewport={{ once: true }}
              className="
                mx-auto
                mt-8
                w-full
                overflow-hidden
                border
                border-[#78866B]/30
                bg-[#FFF9EF]
                p-1.5
                shadow-[0_14px_35px_rgba(89,102,77,0.12)]

                sm:mt-10
                sm:p-2
              "
            >
              <img
                src="/dresscode.png"
                alt="Ejemplos de vestidos en colores pastel y traje formal"
                loading="lazy"
                className="
                  block
                  h-auto
                  max-h-[460px]
                  w-full
                  object-contain
                "
              />
            </motion.div>
          </motion.div>

          {/* NOTA DE COLORES RESERVADOS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="
              mx-auto
              mt-7
              max-w-md
              rounded-xl
              border
              border-[#F26F5B]/35
              bg-[#F26F5B]/10
              px-4
              py-4

              sm:px-5
              sm:py-5
            "
          >
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#F26F5B]

                sm:text-xs
              "
            >
              Nota
            </p>

            <p
              className="
                mt-2
                font-playfair
                text-sm
                leading-6
                text-[#59664D]

                sm:text-base
                sm:leading-7
              "
            >
              Por favor, evita vestir de blanco o beige.
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-[#59664D]/65

                sm:text-sm
              "
            >
              Estos colores están reservados para los novios.
            </p>
          </motion.div>

          {/* SEPARADOR */}
          <div className="mx-auto my-9 h-px w-20 bg-[#78866B]/45" />

          {/* EVENTO SOLO PARA ADULTOS */}
          <motion.div
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
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="mx-auto max-w-lg px-3 sm:px-6"
          >
            <h3
              className="
                font-playfair
                text-2xl
                font-medium
                leading-tight
                text-[#59664D]

                sm:text-3xl
                md:text-[2rem]
              "
            >
              Evento solo para adultos
            </h3>

            <p
              className="
                mx-auto
                mt-4
                max-w-md
                text-sm
                leading-6
                text-[#59664D]/75

                sm:text-base
                sm:leading-7
              "
            >
              Amamos a sus pequeños, pero en esta ocasión hemos decidido
              celebrar únicamente con adultos. Gracias por su comprensión.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Vestimenta;