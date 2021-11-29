import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const item = {
  hidden: {
    opacity: 0,
    y: -70,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.03, 0.01, -0.05, 1],
      duration: 0.5,
    },
    rotate: 0,
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
function ItemList() {
  const [pressed, setPressed] = useState(false);
  return (
    <motion.div
      className="w-full flex justify-around items-center  select-none h-full mt-10"
      onClick={() => setPressed(!pressed)}
      whileTap={{
        scale: 1.1,
        y: 40,
        z: 20,
        transition: { ease: [0.03, 0.01, -0.05, 1], duration: 1 },
      }}
      initial={{ y: -200 }}
      animate={{
        y: 0,
        transition: {
          duration: 0.8,
        },
      }}
    >
      <motion.div
        variants={item}
        initial={{ y: 100 }}
        whileInView="show"
        whileHover={{ scale: 1.1 }}
        viewport={{ once: true }}
      >
        <h4 className="font-medium text-3xl text-black cursor-pointer">
          Descarga de Contenedores
        </h4>
        {pressed && (
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                ease: [0.03, 0.01, -0.05, 1],
                duration: 0.5,
              },
              rotate: 0,
            }}
            exit={{
              opacity: 0,
              y: -200,
              transition: {
                ease: "easeInOut",
                duration: 0.8,
              },
            }}
            className="mt-5 font-normal cursor-pointer"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quasi explicabo totam aliquam similique ratione expedita,
            quam neque sunt aliquid cupiditate magni itaque nisi
            dolor. Eligendi vitae repellat aut? Quo, eius?
          </motion.p>
        )}
      </motion.div>

      <div className="bg-gray-600 rounded-xl md:h-60 md:w-60 cursor-pointer">
        <motion.div
          className="md:h-60 md:w-60 relative"
          initial={{ y: -150, opacity:0}}
          whileInView={{opacity:1, y:0}}
          viewport={{ once: true }}
        >
          <Image
            src="https://metrocleansite.s3.amazonaws.com/descarga-contenedor.webp"
            layout="fill"
            className="rounded-xl"
            objectFit="cover"
            alt=""
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ItemList;
