import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/solid";
import Logo from "../components/Logo";
import { motion } from "framer-motion";
const image = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  show: {
    opacity: 1,
    x: 0,
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
function Hero() {
  return (
    <section className="pt-3 sm:mt-10">
      
      {/* left side */}
      <div className="sm:flex sm:justify-between sm:items-center">
        <div className="w-full">
          {/* hero bold text */}
          <div className="sm:inline hidden">
            <h1 className="font-bold text-5xl text-black">
              Manejo de personal
            </h1>
            <h1 className="font-bold text-5xl text-black">
              para agilizar
            </h1>
            <h1 className="font-bold text-5xl text-primary-400">
              tu negocio
            </h1>
          </div>
          <div className="sm:hidden mt-3">
            <h1 className="font-bold text-4xl text-black">
              Manejo de personal para agilizar
            </h1>
            <h1 className="font-bold text-4xl text-primary-400">
              tu negocio
            </h1>
          </div>

          {/* hero light text */}
          <div className="items-center flex pt-2 sm:mt-3">
            <h1 className="font-light text-gray-700 text-lg justify-center items-center md:text-xl">
              Una empresa panameña dedicada al manejo de personal con
              3+ anos de experiencia
            </h1>
          </div>

          {/* buttons */}
          <div className="mt-4 sm:mt-16 justify-center flex">
            <Link href="/Contacto" passHref>
              <motion.div whileTap={{ rotate:20, opacity:0, y:-20, x:20}}  className="z-20">
                <Button text="Contactanos" color="primary" />
              </motion.div>
            </Link>
            <Link href="/servicios" passHref>
            <motion.div whileTap={{ rotate:-20, opacity:0, y:-20, x:20}}  className="z-20">
            <Button text="Servicios" />
            </motion.div>
            </Link>
          </div>
        </div>

        {/* right Side */}
        <motion.div
          className="w-full"
          variants={image}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {/* image */}
          <div className="flex justify-center">
            <div className="relative w-96 h-96 mt-4 ">
              <Image
                src="https://djurqtwi328kw.cloudfront.net/empkeados.webp"
                layout="fill"
                objectFit="fill"
                className="rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="justify-center flex mt-4 animate-bounce">
        <ArrowDownIcon className="h-5 w-5 justify-center text-black 2xl:hidden hidden sm:inline-flex" />
      </div>
    </section>
  );
}

export default Hero;
