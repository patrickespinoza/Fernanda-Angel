import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Regalos = () => {
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
          px-6
          pb-36
          pt-16
          text-center
          shadow-[0_24px_65px_rgba(89,102,77,0.14)]

          sm:rounded-[2.5rem]
          sm:px-12
          sm:pb-40
          sm:pt-20

          md:px-20
          md:pb-32
          md:pt-24
        "
      >
        {/* CONTENIDO */}
        <div className="relative z-20 mx-auto max-w-2xl">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
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
            Con mucho cariño
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
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="
              mt-4
              font-cursiveDancing
              text-5xl
              leading-tight
              text-[#59664D]

              sm:text-6xl
              md:text-7xl
            "
          >
            Lluvia de sobres
          </motion.h2>

          {/* SEPARADOR */}
          <div className="my-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#78866B]/60 sm:w-20" />

            <span className="text-xl text-[#78866B]">
              ❧
            </span>

            <span className="h-px w-12 bg-[#78866B]/60 sm:w-20" />
          </div>

          {/* ICONO DE SOBRE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            whileHover={{
              y: -4,
              rotate: -3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="
              mx-auto
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border
              border-[#F26F5B]/40
              bg-[#F26F5B]/10
              text-[#F26F5B]

              sm:h-28
              sm:w-28
            "
          >
            <Mail
              size={46}
              strokeWidth={1.25}
            />
          </motion.div>

          {/* MENSAJE */}
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
            className="
              mx-auto
              mt-9
              max-w-xl
              font-playfair
              text-lg
              leading-9
              text-[#59664D]

              sm:text-xl
              sm:leading-10
            "
          >
            <p>
              Nuestro mejor regalo será contar con tu presencia en este día tan
              especial.
            </p>

            <p className="mt-6">
              Si deseas obsequiarnos un detalle, tendremos lluvia de sobres.
              Puedes colocar tu presente en efectivo dentro de un sobre y
              entregarlo durante el evento.
            </p>
          </motion.div>

          {/* MENSAJE DESTACADO */}
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
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="
              mx-auto
              mt-10
              max-w-lg
              border-y
              border-[#78866B]/35
              px-4
              py-5
            "
          >
            <p
              className="
                font-cursiveDancing
                text-3xl
                text-[#F26F5B]

                sm:text-4xl
              "
            >
              Gracias por acompañarnos
            </p>
          </motion.div>
        </div>

        {/* UVAS — ESQUINA INFERIOR DERECHA */}
        <motion.img
          src="/uva.png"
          alt=""
          aria-hidden="true"
          initial={{
            opacity: 0,
            x: 40,
            y: 30,
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
            -right-1
            w-[190px]
            opacity-90

            sm:-bottom-16
            sm:-right-16
            sm:w-[260px]

            md:-bottom-20
            md:-right-20
            md:w-[330px]

            lg:-bottom-10
            lg:-right-10
            lg:w-[390px]
          "
        />
      </motion.div>
    </section>
  );
};

export default Regalos;