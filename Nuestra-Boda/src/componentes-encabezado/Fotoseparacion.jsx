import React from "react";
import { motion } from "framer-motion";

const FotoSeparacion = ({
  imagen = "/Separacion.jpg",
  descripcion = "Fernanda y Ángel",
}) => {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#FFF9EF]
        px-4
        py-10

        sm:px-6
        sm:py-14

        md:px-8
        md:py-16
      "
    >
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
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="mx-auto w-full max-w-6xl"
      >

          {/* MARCO INTERIOR */}
            <img
              src={imagen}
              alt={descripcion}
              loading="lazy"
              className="
                block
                h-auto
                max-h-[90vh]
                w-full
                object-contain
              "
            />

        {/* DETALLE CLÁSICO INFERIOR */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#78866B]/45 sm:w-16" />

          <span className="font-playfair text-lg text-[#78866B]">
            ❧
          </span>

          <span className="h-px w-10 bg-[#78866B]/45 sm:w-16" />
        </div>
      </motion.div>
    </section>
  );
};

export default FotoSeparacion;