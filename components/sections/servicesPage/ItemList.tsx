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
interface ItemListProps {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  url: string;
}

function ItemList({
  title,
  description2,
  description1,
  description3,
  url
}: ItemListProps) {
  const [pressed, setPressed] = useState(false);
  return (
    <motion.div
      className="w-full md:flex items-center select-none h-full mt-10 md:justify-between md:px-20 grid grid-cols-1 justify-center bg-white md:bg-transparent rounded-md p-4"
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
      id={title}
    >
      <motion.div
        variants={item}
        initial={{ y: 100 }}
        whileInView="show"
        whileHover={{ scale: 1.1 }}
        viewport={{ once: true }}
      >
        <h4 className="font-medium text-3xl text-black cursor-pointer mt-4 md:mt-0">
          {title}
        </h4>
        {pressed && (
          <motion.p
            initial={{ opacity: 0 }}
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
              y: -5,
              transition: {
                ease: "easeInOut",
                duration: 0.8,
              },
            }}
            className="mt-5 font-normal cursor-pointer text-black md:text-xl"
          >
            ~{description1}<br />
            ~{description2}<br />
            ~{description3}<br />
          </motion.p>
        )}
      </motion.div>

      <div className="bg-gray-600 rounded-xl md:h-72 md:w-96 cursor-pointer h-40 w-full row-start-1">
        <motion.div
          className="md:h-72 md:w-96 relative w-full h-40"
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Image
            src={url}
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
