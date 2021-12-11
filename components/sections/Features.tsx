import FeaturesCards from "../components/FeaturesCards";
import Image from "next/image";
import { motion } from "framer-motion";
import { UserGroupIcon } from "@heroicons/react/solid";
import { CashIcon, ClipboardCheckIcon } from "@heroicons/react/outline";
const container = {
  hidden: {
    y: -10,
  },
  show: {
    y: 0,
    transition: {
      staggerChildren: 0.35,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
function Features() {
  return (
    <motion.div
      className="mt-6 bg-white shadow-md border p-3 mb-4 rounded-md md:flex sm:mt-11"
      variants={item}
      initial="hidden"
      animate="show"
      exit="exit"
      key="features"
      viewport={{ once: true }}
    >
      {/* left section */}
      <div className="p-3 items-center justify-center flex sm:w-6/12 sm:items-center sm:pt-10">
        {/* title */}
        <div>
          <h1 className="font-extrabold text-4xl text-black">
            Mas que un Outsourcing
          </h1>

          {/* image */}
          <div className="w-full">
            <div className="flex justify-center">
              <div className="relative w-80 h-80 mt-8 md:mt-12">
                <Image
                  src="https://metrocleansite.s3.amazonaws.com/kadir-ensenado.webp"
                  layout="fill"
                  objectFit="fill"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right section */}
      <motion.div
        className="grid grid-cols-2 sm:w-5/12 md:mx-7 sm:gap-4"
        key="featureContainer"
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        <motion.div key={"motion1"} variants={item}>
          <FeaturesCards
            description="Le proporcionamos una excelente tarifa basada en ubicacion"
            icon={<CashIcon className="icon"></CashIcon>}
          />
        </motion.div>

        <motion.div key={"motion2"} variants={item}>
          <FeaturesCards
            title="Manejo de 5 S"
            icon="S"
            description="Manejo de metodologia 5 S en bodegas, oficinas como tambien a nivel de operaciones"
          />
        </motion.div>
        <motion.div key={"motion3"} variants={item}>
          <FeaturesCards
            title="Personal Calificado"
            description="Proveemos el personal adecuado y calificado para sus necesidades"
            icon={<UserGroupIcon className="icon" />}
          />
        </motion.div>
        <motion.div key={"motion4"} variants={item}>
          <FeaturesCards
            title="Servicio Garantizado"
            description="Sentir la misma responsabilidad que el equipo de mantenimiento de cada cliente"
            icon={<ClipboardCheckIcon className="icon" />}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Features;
