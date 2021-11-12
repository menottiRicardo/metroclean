import FeaturesCards from "../components/FeaturesCards";
import Image from "next/image";
import {motion} from "framer-motion"
const item = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.8, 0.01, -0.05, 0.95],
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
    <motion.div className="mt-6 bg-white shadow-md border p-3 mb-4 rounded-md md:flex sm:mt-11" variants={item} initial="hidden" animate="show" exit="exit">
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
      <div className="grid grid-cols-2 gap-3 sm:w-5/12 md:mx-7">
        <FeaturesCards />
        <FeaturesCards title="Manejo de 5 S" icon="S"/>
        <FeaturesCards />
        <FeaturesCards />
      </div>
    </motion.div>
  );
}

export default Features;
