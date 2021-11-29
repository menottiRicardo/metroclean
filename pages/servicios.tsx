import { motion } from "framer-motion";
import { Item } from "framer-motion/types/components/Reorder/Item";

import Navbar from "../components/components/Navbar";
import ItemList from "../components/sections/servicesPage/ItemList";
import ServiceCard from "../components/sections/servicesPage/ServiceCard";
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
const list = ["item1", "item1", "item1", "item1"];
function Servicios() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-primary-500"
    >
      <Navbar />
      <main className="layout pb-20">
        <h1 className="text-4xl items-center justify-center flex mt-10 font-extrabold text-black">
          Servicios
        </h1>

        {list.map(() => (
          <ItemList />
        ))}
      </main>
    </motion.div>
  );
}

export default Servicios;
