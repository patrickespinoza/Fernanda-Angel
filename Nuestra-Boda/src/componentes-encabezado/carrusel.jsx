import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Carousel = () => {
  /*
    Modifica "position" para ajustar cada fotografía.

    Ejemplos:
    "center center"
    "center 30%"
    "center 70%"
    "left center"
    "right center"
  */
  const images = [
    {
      src: "/Carrusel01.jpg",
      position: "center 90%",
      alt: "Fernanda y Ángel",
    },
    {
      src: "/Carrusel02.jpg",
      position: "center 90%",
      alt: "Fernanda y Ángel",
    },
    {
      src: "/Carrusel03.jpg",
      position: "center center",
      alt: "Fernanda y Ángel",
    },
    {
      src: "/Carrusel04.jpg",
      position: "center 78%",
      alt: "Fernanda y Ángel",
    },
    {
      src: "/Carrusel05.jpg",
      position: "center 90%",
      alt: "Fernanda y Ángel",
    },
  ];

  const [index, setIndex] = useState(0);
  const [imagenesCargadas, setImagenesCargadas] = useState(false);

  /*
    Precarga todas las fotografías antes de comenzar
    el movimiento automático.
  */
  useEffect(() => {
    let imagenesTerminadas = 0;

    images.forEach(({ src }) => {
      const imagen = new Image();

      const terminarCarga = () => {
        imagenesTerminadas += 1;

        if (imagenesTerminadas === images.length) {
          setImagenesCargadas(true);
        }
      };

      imagen.onload = terminarCarga;
      imagen.onerror = terminarCarga;
      imagen.src = src;
    });
  }, []);

  /*
    Carrusel automático.
    Comienza cuando todas las imágenes están precargadas.
  */
  useEffect(() => {
    if (!imagenesCargadas) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [imagenesCargadas]);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  const seleccionarImagen = (nuevoIndex) => {
    setIndex(nuevoIndex);
  };

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

        sm:px-10
        sm:py-24

        md:px-14
        md:py-28
      "
    >
      {/* FLOR SUPERIOR IZQUIERDA */}
      <motion.img
        src="/flor2.png"
        alt=""
        aria-hidden="true"
        initial={{
          opacity: 0,
          x: -35,
          y: -20,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="
          pointer-events-none
          absolute
          z-0
          select-none
          object-contain

          -left-5
          -top-1
          w-[170px]
          opacity-80

          sm:-left-20
          sm:-top-16
          sm:w-[270px]
          sm:opacity-90

          md:-left-24
          md:-top-20
          md:w-[350px]

          lg:-left-20
          lg:-top-24
          lg:w-[430px]
          lg:opacity-100
        "
      />

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
        className="relative z-10 mx-auto max-w-6xl"
      >
        {/* ENCABEZADO */}
        <div className="mb-12 text-center">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#78866B]

              sm:text-sm
            "
          >
            Nuestra historia
          </p>

          <h2
            className="
              mt-4
              font-cursiveDancing
              text-5xl
              text-[#59664D]

              sm:text-6xl
              md:text-7xl
            "
          >
            Momentos
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#78866B]/60 sm:w-20" />

            <span className="text-xl text-[#78866B]">
              ❧
            </span>

            <span className="h-px w-12 bg-[#78866B]/60 sm:w-20" />
          </div>
        </div>

        {/* ÁREA DEL CARRUSEL */}
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-4xl
            px-3

            sm:px-8
            md:px-10
          "
        >
          {/* MARCO DE LA FOTOGRAFÍA */}
          <div
            className="
              relative
              h-[440px]
              w-full
              overflow-hidden
              border
              border-[#78866B]/40
              bg-[#F4EFE5]
              p-1.5
              shadow-[0_25px_65px_rgba(89,102,77,0.18)]

              sm:h-[560px]
              sm:p-2

              md:h-[650px]
            "
          >
            <div className="relative h-full w-full overflow-hidden">
              {images.map((imagen, imageIndex) => (
                <motion.img
                  key={imagen.src}
                  src={imagen.src}
                  alt={imagen.alt}
                  draggable="false"
                  initial={false}
                  animate={{
                    opacity: index === imageIndex ? 1 : 0,
                    scale: index === imageIndex ? 1 : 1.035,
                  }}
                  transition={{
                    opacity: {
                      duration: 0.65,
                      ease: "easeInOut",
                    },
                    scale: {
                      duration: 1.2,
                      ease: "easeOut",
                    },
                  }}
                  style={{
                    objectPosition: imagen.position,
                  }}
                  className="
                    absolute
                    inset-0
                    block
                    h-full
                    w-full
                    select-none
                    object-cover
                  "
                />
              ))}

              {/* DEGRADADO INFERIOR */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-28
                  bg-gradient-to-t
                  from-black/30
                  to-transparent
                "
              />

              {/* NÚMERO DE FOTOGRAFÍA */}
              <div
                className="
                  absolute
                  bottom-5
                  right-5
                  rounded-full
                  bg-[#FFF9EF]/90
                  px-4
                  py-2
                  font-playfair
                  text-xs
                  tracking-[0.15em]
                  text-[#59664D]
                  shadow-md
                  backdrop-blur-sm
                "
              >
                {String(index + 1).padStart(2, "0")}

                <span className="mx-2 text-[#78866B]/50">
                  /
                </span>

                {String(images.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* BOTÓN IZQUIERDO */}
          <button
            type="button"
            onClick={prevImage}
            aria-label="Ver fotografía anterior"
            className="
              absolute
              left-0
              top-1/2
              z-30
              flex
              h-11
              w-11
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#78866B]/40
              bg-[#FFF9EF]
              text-[#59664D]
              shadow-[0_10px_25px_rgba(89,102,77,0.22)]
              transition
              duration-300
              hover:scale-110
              hover:bg-[#59664D]
              hover:text-white

              sm:left-4
              sm:h-13
              sm:w-13

              md:left-5
              md:h-14
              md:w-14
            "
          >
            <FaChevronLeft size={18} />
          </button>

          {/* BOTÓN DERECHO */}
          <button
            type="button"
            onClick={nextImage}
            aria-label="Ver siguiente fotografía"
            className="
              absolute
              right-0
              top-1/2
              z-30
              flex
              h-11
              w-11
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#78866B]/40
              bg-[#FFF9EF]
              text-[#59664D]
              shadow-[0_10px_25px_rgba(89,102,77,0.22)]
              transition
              duration-300
              hover:scale-110
              hover:bg-[#59664D]
              hover:text-white

              sm:right-4
              sm:h-13
              sm:w-13

              md:right-5
              md:h-14
              md:w-14
            "
          >
            <FaChevronRight size={18} />
          </button>
        </div>

        {/* INDICADORES FUERA DE LA FOTO */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {images.map((imagen, imageIndex) => (
            <button
              key={imagen.src}
              type="button"
              onClick={() => seleccionarImagen(imageIndex)}
              aria-label={`Ver fotografía ${imageIndex + 1}`}
              className="flex h-5 items-center justify-center"
            >
              <motion.span
                animate={{
                  width: index === imageIndex ? 34 : 9,
                  backgroundColor:
                    index === imageIndex
                      ? "#59664D"
                      : "#B9A1D8",
                }}
                transition={{
                  duration: 0.3,
                }}
                className="block h-2 rounded-full"
              />
            </button>
          ))}
        </div>

        {/* FRASE */}
    <motion.p
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
    mt-8
    text-center
    font-cursiveDancing
    text-4xl
    text-[#59664D]

    sm:text-5xl
    md:text-6xl
  "
>
  “Tú y yo en cada eternidad”

  <motion.span
    initial={{
      opacity: 0,
      scale: 0.6,
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
    }}
    animate={{
      scale: [1, 1.12, 1],
    }}
    transition={{
      opacity: {
        duration: 0.6,
        delay: 0.5,
      },
      scale: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    viewport={{ once: true }}
    className="
      mt-5
      block
      text-2xl
      text-black

      sm:text-3xl
    "
  >
    ♡
  </motion.span>
</motion.p>
      </motion.div>
    </section>
  );
};

export default Carousel;