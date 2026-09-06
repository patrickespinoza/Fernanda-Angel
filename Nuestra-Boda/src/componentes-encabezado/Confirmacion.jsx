import React, { useState } from "react";
import { motion } from "framer-motion";

const Confirmacion = () => {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [ladoEnviando, setLadoEnviando] = useState("");
  const [enviado, setEnviado] = useState(false);

  /*
    Coloca los números con código de país,
    sin el signo +, espacios ni guiones.

    Ejemplo México:
    526311234567
  */
  const WHATSAPP_NOVIA = "526861065126";
  const WHATSAPP_NOVIO = "529711491501";

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzjOoyhLq4AcRCmWtKpuFDPplxPn-E-A2AOTPJP9JwgPl-OhSgJbVSuX3bD5enYKbHm/exec";

  const enviarConfirmacion = async (lado) => {
    if (enviando) return;

    if (!nombreInvitado.trim()) {
      setError("Ingresa tu nombre y apellido.");
      return;
    }

    if (!asistencia) {
      setError("Selecciona si asistirás al evento.");
      return;
    }

    if (
      asistencia === "Sí asistiré" &&
      (!invitados || Number(invitados) < 1)
    ) {
      setError("Indica el número de invitados que asistirán.");
      return;
    }

    const telefono =
      lado === "Novia"
        ? WHATSAPP_NOVIA
        : WHATSAPP_NOVIO;

    if (telefono.includes("X")) {
      setError(`Falta agregar el número de WhatsApp de la ${lado.toLowerCase()}.`);
      return;
    }

    setError("");
    setEnviado(false);
    setEnviando(true);
    setLadoEnviando(lado);

    const cantidadInvitados =
      asistencia === "Sí asistiré"
        ? Number(invitados)
        : 0;

    const data = {
      nombre: nombreInvitado.trim(),
      invitados: cantidadInvitados,
      asistencia,
      mensaje: mensajeInvitado.trim(),
      lado,
    };

    const mensajeWhatsApp = [
      "Hola, quiero confirmar mi asistencia a la boda de Fernanda y Ángel.",
      "",
      `Nombre: ${data.nombre}`,
      `Asistencia: ${data.asistencia}`,
      `Número de invitados: ${data.invitados}`,
      `Invitado por: ${data.lado}`,
      data.mensaje
        ? `Mensaje: ${data.mensaje}`
        : "",
    ]
      .filter(Boolean)
      .join("\n");

    const enlaceWhatsApp =
      `https://wa.me/${telefono}?text=${encodeURIComponent(
        mensajeWhatsApp
      )}`;

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      setEnviado(true);

      setTimeout(() => {
        window.location.href = enlaceWhatsApp;
      }, 700);

      setNombreInvitado("");
      setMensajeInvitado("");
      setAsistencia("");
      setInvitados("");
    } catch (error) {
      console.error("Error al enviar la confirmación:", error);

      setError(
        "No pudimos guardar tu confirmación. Intenta nuevamente."
      );
    } finally {
      setEnviando(false);
      setLadoEnviando("");
    }
  };

  return (
    <section
      className="
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
          mx-auto
          max-w-3xl
          border
          border-[#FFF9EF]/35
          bg-[#FFF9EF]
          px-6
          py-14
          shadow-[0_28px_75px_rgba(0,0,0,0.24)]

          sm:px-12
          sm:py-16

          md:px-16
          md:py-20
        "
      >
        {/* ENCABEZADO */}
        <div className="text-center">
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
            RSVP
          </p>

          <h2
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
            Confirmar asistencia
          </h2>

          <div className="my-7 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#78866B]/60 sm:w-20" />

            <span className="text-xl text-[#78866B]">
              ❧
            </span>

            <span className="h-px w-12 bg-[#78866B]/60 sm:w-20" />
          </div>

          <p
            className="
              mx-auto
              max-w-xl
              font-playfair
              text-base
              leading-8
              text-[#59664D]/80

              sm:text-lg
            "
          >
            Por favor confirma tu asistencia con la persona que te
            hizo llegar la invitación.
          </p>
        </div>

        {/* FORMULARIO */}
        <div className="mt-10 space-y-5">

          {/* NOMBRE */}
          <div>
            <label
              htmlFor="nombreInvitado"
              className="
                mb-2
                block
                text-xs
                uppercase
                tracking-[0.22em]
                text-[#59664D]
              "
            >
              Nombre y apellido
            </label>

            <input
              id="nombreInvitado"
              type="text"
              autoComplete="name"
              placeholder="Escribe tu nombre completo"
              value={nombreInvitado}
              onChange={(e) =>
                setNombreInvitado(e.target.value)
              }
              className="
                w-full
                rounded-xl
                border
                border-[#78866B]/35
                bg-white
                px-5
                py-4
                text-[#59664D]
                outline-none
                transition
                placeholder:text-[#59664D]/40
                focus:border-[#78866B]
                focus:ring-2
                focus:ring-[#78866B]/20
              "
            />
          </div>

          {/* ASISTENCIA */}
          <div>
            <p
              className="
                mb-3
                text-xs
                uppercase
                tracking-[0.22em]
                text-[#59664D]
              "
            >
              ¿Asistirás?
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <button
                type="button"
                onClick={() =>
                  setAsistencia("Sí asistiré")
                }
                className={`
                  rounded-xl
                  border
                  px-5
                  py-4
                  font-playfair
                  transition
                  duration-300
                  ${
                    asistencia === "Sí asistiré"
                      ? "border-[#59664D] bg-[#59664D] text-white"
                      : "border-[#78866B]/35 bg-white text-[#59664D] hover:border-[#78866B]"
                  }
                `}
              >
                Sí asistiré
              </button>

              <button
                type="button"
                onClick={() => {
                  setAsistencia("No podré asistir");
                  setInvitados("");
                }}
                className={`
                  rounded-xl
                  border
                  px-5
                  py-4
                  font-playfair
                  transition
                  duration-300
                  ${
                    asistencia === "No podré asistir"
                      ? "border-[#59664D] bg-[#59664D] text-white"
                      : "border-[#78866B]/35 bg-white text-[#59664D] hover:border-[#78866B]"
                  }
                `}
              >
                No asistiré
              </button>
            </div>
          </div>

          {/* NÚMERO DE INVITADOS */}
          <div>
            <label
              htmlFor="numeroInvitados"
              className="
                mb-2
                block
                text-xs
                uppercase
                tracking-[0.22em]
                text-[#59664D]
              "
            >
              Número de invitados
            </label>

            <input
              id="numeroInvitados"
              type="number"
              min="1"
              inputMode="numeric"
              placeholder={
                asistencia === "No podré asistir"
                  ? "No aplica"
                  : "¿Cuántas personas asistirán?"
              }
              value={invitados}
              disabled={asistencia === "No podré asistir"}
              onChange={(e) =>
                setInvitados(e.target.value)
              }
              className="
                w-full
                rounded-xl
                border
                border-[#78866B]/35
                bg-white
                px-5
                py-4
                text-[#59664D]
                outline-none
                transition
                placeholder:text-[#59664D]/40
                focus:border-[#78866B]
                focus:ring-2
                focus:ring-[#78866B]/20
                disabled:cursor-not-allowed
                disabled:bg-[#EEE9DE]
                disabled:opacity-70
              "
            />
          </div>

          {/* MENSAJE */}
          <div>
            <label
              htmlFor="mensajeInvitado"
              className="
                mb-2
                block
                text-xs
                uppercase
                tracking-[0.22em]
                text-[#59664D]
              "
            >
              Mensaje para los novios
            </label>

            <textarea
              id="mensajeInvitado"
              placeholder="Escribe un mensaje especial"
              value={mensajeInvitado}
              onChange={(e) =>
                setMensajeInvitado(e.target.value)
              }
              rows="4"
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-[#78866B]/35
                bg-white
                px-5
                py-4
                text-[#59664D]
                outline-none
                transition
                placeholder:text-[#59664D]/40
                focus:border-[#78866B]
                focus:ring-2
                focus:ring-[#78866B]/20
              "
            />
          </div>

          {/* ERROR */}
          {error && (
            <p
              role="alert"
              className="
                rounded-xl
                border
                border-[#F26F5B]/35
                bg-[#F26F5B]/10
                px-4
                py-3
                text-sm
                leading-6
                text-[#59664D]
              "
            >
              {error}
            </p>
          )}

          {/* MENSAJE ENVIADO */}
          {enviado && (
            <p
              className="
                rounded-xl
                border
                border-[#78866B]/35
                bg-[#78866B]/10
                px-4
                py-3
                text-center
                text-sm
                text-[#59664D]
              "
            >
              Confirmación guardada. Abriendo WhatsApp…
            </p>
          )}

          {/* BOTONES DE WHATSAPP */}
          <div
            className="
              grid
              grid-cols-1
              gap-4
              pt-3

              sm:grid-cols-2
            "
          >
            <button
              type="button"
              onClick={() =>
                enviarConfirmacion("Novia")
              }
              disabled={enviando}
              className="
                flex
                min-h-[58px]
                items-center
                justify-center
                rounded-full
                bg-[#59664D]
                px-6
                py-4
                text-center
                font-playfair
                text-base
                text-white
                shadow-[0_14px_30px_rgba(89,102,77,0.25)]
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#4B5742]
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {enviando && ladoEnviando === "Novia"
                ? "Enviando..."
                : "Confirmar con la novia"}
            </button>

            <button
              type="button"
              onClick={() =>
                enviarConfirmacion("Novio")
              }
              disabled={enviando}
              className="
                flex
                min-h-[58px]
                items-center
                justify-center
                rounded-full
                bg-[#F26F5B]
                px-6
                py-4
                text-center
                font-playfair
                text-base
                text-white
                shadow-[0_14px_30px_rgba(242,111,91,0.25)]
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#DF604E]
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {enviando && ladoEnviando === "Novio"
                ? "Enviando..."
                : "Confirmar con el novio"}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Confirmacion;