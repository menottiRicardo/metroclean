import { useEffect } from "react";
import Image from "next/image";
// import Logo from "./Logo";
import { motion } from "framer-motion";
interface LoaderProps {
  loading: boolean;
  setLoading: any;
}
const container = {
  show: {
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
function Loader({ loading, setLoading }: LoaderProps) {
  
  return (
    <div key="loaders" className="bg-white w-screen sm:w-full h-screen scrollbar-hide z-[-10]">
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 sm:p-5 p-2"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
        key="loader"
      >
        <motion.div
          className="w-3/4 2xl:w-1/4 sm:w-2/6 sm:col-span-2"
          variants={item}
        >
          <Image
            src="/descarga-contenedor.webp"
            layout="responsive"
            className="rounded-xl"
            alt=""
            width={300}
            height={300}
          />
        </motion.div>
        <motion.div
          className="w-3/4 2xl:w-5/12 sm:w-6/12 sm:col-span-1 mt-10"
          variants={item}
        >
          <Image
            src="/limpieza-bodegas.webp"
            layout="responsive"
            width={300}
            height={300}
            className="rounded-xl"
            alt=""
          />
        </motion.div>
        <div className="flex justify-center items-center col-span-2 sm:col-span-3">
          <div className="w-5/12 sm:w-5/12">
            <Image
              src="/logo-stickers.png"
              alt="me"
              layout="responsive"
              width={250}
              height={150}
            />
          </div>
        </div>
        <motion.div
          className="w-9/12 col-span-1 mt-40 sm:w-2/12 sm:ml-44 sm:mt-0 sm:col-span-2 md:absolute md:bottom-0 md:left-0 md:ml-10"
          variants={item}
        >
          <Image
            src="/maquilas.webp"
            layout="responsive"
            width={300}
            height={300}
            className="rounded-xl"
            alt=""
          />
        </motion.div>
        <motion.div
          className="w-11/12 col-span-1 mt-8 sm:w-2/12 sm:ml-44 sm:mt-0 sm:col-span-1 md:absolute md:bottom-0 md:right-0 md:mr-10"
          variants={item}
        >
          <Image
            src="/empkeados.webp"
            layout="responsive"
            width={300}
            height={300}
            className="rounded-xl"
            alt=""
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Loader;
