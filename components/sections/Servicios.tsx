import ServiciosCard from "../components/ServiciosCard";
import {motion} from 'framer-motion'
const item = {
  hidden: {
    opacity: 0,
    y: 25,
    rotate:10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.03, 0.01, -0.05, 1],
      duration: 1.6,
    },
    rotate:0
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
function Servicios() {
  return (
    <motion.div className="mt-8 sm:mt-20 pb-10" variants={item} initial="hidden" animate="show" exit="exit" key="servicio">
      {/* title */}
      <h1 className="text-primry-400 font-bold text-2xl p-2 flex items-center text-black justify-center">
        Servicios Populares
      </h1>

      {/* servicios */}
      {/* <div className="sm:justify-center sm:flex hidden sm:items-center"> */}
        <div className="rounded-md flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 sm:gap-y-8 scrollbar scrollbar-default">
          <ServiciosCard
            title="Descarga De contenedores"
            color="600"
            url="https://metrocleansite.s3.amazonaws.com/descarga-contenedor.webp"
            style="ml-16 sm:ml-14"
          />

          <ServiciosCard
            title="Personal de Limpieza"
            color="900"
            url="https://metrocleansite.s3.amazonaws.com/limpieza-bodegas.webp"
            style="ml-20"
          />
          <ServiciosCard
            title="Pickiadores"
            color="600"
            url="https://metrocleansite.s3.amazonaws.com/pickeadores.webp"
            style="ml-32 sm:ml-20"
          />
          <ServiciosCard
            title="Maquilas"
            color="900"
            url="https://metrocleansite.s3.amazonaws.com/maquilas.webp"
            style="ml-32 pl-5 sm:ml-16"
          />
        {/* </div> */}
      </div>
    </motion.div>
  );
}

export default Servicios;
