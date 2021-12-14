import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "../components/components/Loader";
import Navbar from "../components/components/Navbar";
import Contact from "../components/sections/Contact";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import Servicios from "../components/sections/Servicios";
import { motion } from "framer-motion";
// import styles from '../styles/Home.module.css'
import { NextSeo } from "next-seo";
import Footer from "../components/sections/Footer";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  return (
    <motion.div exit={{ opacity: 0 }}>
      <NextSeo
        title="MetroClean Services"
        description="Empresa panameña dedicada al manejo de personal con 3+ años de experiencia y llevando servicios como descarga de contendores panama, ayudantes generales panama, maquilas, limpieza panama, metroclean panama"
        openGraph={{
          url: "https://metrocleanpa.com",
          title: "MetroClean Services",
          description:
            "Empresa panameña dedicada al manejo de personal con 3+ años de experiencia",
          images: [
            {
              url: "https://metrocleansite.s3.amazonaws.com/thumbnail.webp",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/webp",
            },
          ],
          site_name: "Metro Clean",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      {loading ? (
        <motion.div key="loader">
          <Loader loading={loading} setLoading={setLoading} />
        </motion.div>
      ) : (
        <motion.main
          className="shadow-md bg-primary-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Navbar />
          <div className="layout">
            <Hero />
            <Features />
            <Servicios />
            <Contact />
          </div>
        </motion.main>
      )}
      {/* <Footer /> */}
    </motion.div>
  );
};

export default Home;
