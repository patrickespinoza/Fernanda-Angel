import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contador = ({
  titulo = "Faltan",
  frase = "Para nuestro gran día",
  fecha = "2026-10-17T00:00:00",
}) => {
  const calcularTiempo = () => {
    const diferencia = new Date(fecha).getTime() - new Date().getTime();

    if (diferencia <= 0) {
      return {
        Días: 0,
        Horas: 0,
        Minutos: 0,
        Segundos: 0,
      };
    }

    return {
      Días: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
      Horas: Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
      ),
      Minutos: Math.floor(
        (diferencia / (1000 * 60)) % 60
      ),
      Segundos: Math.floor(
        (diferencia / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calcularTiempo());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcularTiempo());
    }, 1000);

    return () => clearInterval(timer);
  }, [fecha]);

  const formatearNumero = (numero) => {
    return String(numero).padStart(2, "0");
  };

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#FFF9EF]
        px-5
        py-24
        sm:px-8
        sm:py-28
        md:py-32
        lg:min-h-[680px]
        lg:flex
        lg:items-center
      "
    >
      {/* FLORES DEL LADO IZQUIERDO */}
      <motion.img
        src="/flor2.png"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          pointer-events-none
          absolute
          z-0
          object-contain
          select-none

          -left-5
          -top-1
          w-[160px]
          opacity-75

          sm:-left-20
          sm:-top-12
          sm:w-[290px]
          sm:opacity-85

          md:-left-24
          md:-top-16
          md:w-[390px]

          lg:-left-20
          lg:-top-20
          lg:w-[470px]
          lg:opacity-100

          xl:-left-16
          xl:w-[520px]
        "
      />

      {/* FLORES DEL LADO DERECHO */}
      <motion.img
        src="/flor1.png"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.15,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="
          pointer-events-none
          absolute
          z-0
          object-contain
          select-none

          -right-5
          -top-1
          w-[180px]
          opacity-75

          sm:-right-20
          sm:-top-14
          sm:w-[280px]
          sm:opacity-85

          md:-right-24
          md:-top-20
          md:w-[370px]

          lg:-right-20
          lg:-top-24
          lg:w-[450px]
          lg:opacity-100

          xl:-right-16
          xl:w-[500px]
        "
      />

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto w-full max-w-5xl">

        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            className="
              font-playfair
              text-3xl
              uppercase
              tracking-[0.32em]
              text-[#59664D]

              sm:text-4xl
              sm:tracking-[0.4em]

              md:text-5xl
            "
          >
            {titulo}
          </h2>

          <div className="mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#78866B]/70 sm:w-16" />

            <span className="text-xl text-[#78866B]">
              ❧
            </span>

            <span className="h-px w-10 bg-[#78866B]/70 sm:w-16" />
          </div>
        </motion.div>

        {/* CONTADOR */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-12
            grid
            max-w-[520px]
            grid-cols-2
            gap-x-5
            gap-y-8

            sm:max-w-3xl
            sm:grid-cols-4
            sm:gap-5

            md:mt-14
            md:gap-8
          "
        >
          {Object.entries(timeLeft).map(([unidad, valor], index) => (
            <motion.div
              key={unidad}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div
                className="
                  flex
                  h-[112px]
                  w-[112px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#78866B]
                  bg-[#FFF9EF]/80

                  sm:h-[125px]
                  sm:w-[125px]

                  md:h-[145px]
                  md:w-[145px]
                "
              >
                <span
                  className="
                    font-playfair
                    text-4xl
                    font-normal
                    leading-none
                    text-[#59664D]

                    sm:text-[42px]
                    md:text-5xl
                  "
                >
                  {formatearNumero(valor)}
                </span>
              </div>

              <span
                className="
                  mt-4
                  font-playfair
                  text-[11px]
                  uppercase
                  tracking-[0.22em]
                  text-[#59664D]

                  sm:text-xs
                  sm:tracking-[0.25em]
                "
              >
                {unidad}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* FRASE INFERIOR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.45,
          }}
          viewport={{ once: true }}
          className="mt-14 text-center md:mt-16"
        >
          <p
            className="
              font-playfair
              text-sm
              uppercase
              tracking-[0.28em]
              text-[#59664D]

              sm:text-base
              sm:tracking-[0.38em]

              md:text-lg
            "
          >
            {frase}
          </p>

          <div className="mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#78866B]/60 sm:w-16" />

            <span className="text-lg text-[#78866B]">
              ❧
            </span>

            <span className="h-px w-10 bg-[#78866B]/60 sm:w-16" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contador;