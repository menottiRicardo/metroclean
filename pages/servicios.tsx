import { motion } from "framer-motion";
import { Item } from "framer-motion/types/components/Reorder/Item";
import { NextSeo } from "next-seo";

import Navbar from "../components/components/Navbar";
import ItemList from "../components/sections/servicesPage/ItemList";

const listAnimation = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const list = [
  {
    title: "Pickeadores            ",
    description1:
      "Realizacion de tareas de pick de sku o mercancia en su ubicación",
    description2:
      "Interpretacion de codigos, descripcion de productos",
    description3: "Utilizacion de herramientas de pickin, PDT",
    url:'https://metrocleansite.s3.amazonaws.com/pickeadores.webp'
  },
  {
    title: "Distribucion de Mercancias",
    description1:
      "Personal calificado para tareas de entregas a puntos de supermercados y rutas asignadas",
    description2:
      "Capacitado para realizar proceso de carga de camiones por facturas, lista de empaque",
    description3: "Responsable de la descarga y carga en puntos de ventas o rutas asignadas",
    url:'https://metrocleansite.s3.amazonaws.com/mercancia.webp'
  },
  {
    title: "Maquilas",
    description1:
      "Segregacion de sku o productos asignados",
    description2:
      "Manejo de inventarios para la realizacion de maquilas",
    description3: "Manejo de informes entradas y salidas en el proceso de maquila ( Control de Inventario )",
    url:'https://metrocleansite.s3.amazonaws.com/maquilas.webp'
  },
  {
    title: "Mantenimiento de flotas",
    description1:
      "Mantenimiento preventivo",
    description2:
      "Limpieza interior y exterior",
    description3: "",
    url:'https://metrocleansite.s3.amazonaws.com/brinks.webp'
  },
  {
    title: "Supervisor de bodega",
    description1:
      "Control de Inventarios a nivel de Operaciones",
    description2:
      "Manejo y adminitracion de Personal Operativo",
    description3: "Manejo y adminitracion de Personal Operativo",
    url:'https://metrocleansite.s3.amazonaws.com/kadir-ensenado.webp'
  },
  {
    title: "Empacadores",
    description1:
      "Capacitados para realizar tareas de empaque , reempaque, etiquetado de mercancia y promociones",
    description2:
      "Equipados con sus equipos de seguridad de proteccion personal",
    description3: "Suministrado con implementos de bioseguridad y carnet de salud",
    url:'https://metrocleansite.s3.amazonaws.com/empacadores.webp'
  },
];
function Servicios() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-primary-500"
    >
      <Navbar />
      <NextSeo
        title="Metro Clean Services"
        description="Servicios de bodega como Descarga de Contenedores, Ayudantes generales, entre otros en Panama"
        openGraph={{
          url: "https://metrocleanpa.com",
          title: "Metro Clean Services",
          description:
            "Empresa panameña dedicada al manejo de personal con 3+ anos de experiencia",
          images: [
            {
              url: "https://metrocleansite.s3.amazonaws.com/thumbnail.webp",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/webp",
            },
          ],
          site_name: 'Metro Clean'
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <main className="layout pb-20">
        <h1 className="text-4xl items-center justify-center flex mt-10 font-extrabold text-black">
          Servicios
        </h1>

        {list.map((item) => (
          <ItemList key={item.title} title={item.title} description1={item.description1} description2={item.description2} description3={item.description3} url={item.url}/>
        ))}
      </main>
    </motion.div>
  );
}

export default Servicios;
