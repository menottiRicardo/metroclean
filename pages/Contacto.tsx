import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/components/Navbar";
import { useState } from "react";
import { Candidate } from "../src/API";
import { createCandidate } from "../src/graphql/mutations";
import API, { graphqlOperation } from "@aws-amplify/api";
const Contacto: NextPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    description: "",
  });

  function handleChange(e: any) {
    setForm((prevState): any => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    console.log(form);
    const { name, email, description } = form;
    try {
      await API.graphql(
        graphqlOperation(createCandidate, {
          input: {
            name,
            email,
            description,
          },
        })
      );
      setForm({
        name: "",
        email: "",
        description: "",
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, backgroundColor: "#FE7A00" }}
      animate={{ opacity: 1, backgroundColor: "#FE7A00" }}
    >
      <Head>
        <title>Metro Clean</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/metro-ico-192" />
      </Head>
      <main className="bg-primary-500 h-full">
        <Navbar />
        {/* <Banner /> */}
        <div className="layout md:mt-16">
          <div className="bg-white mt-4 rounded-md p-3 shadow-lg">
            <h1 className="font-bold sm:text-2xl text-lg text-black uppercase flex justify-center">
              Cuentanos que Tienes en mente
            </h1>
            <form className="p-1 mt-10" action="#" method="POST">
              <div className="relative">
                <input
                  type="text"
                  id="nombre"
                  name="name"
                  value={form?.name}
                  onChange={handleChange}
                  className="peer h-10 w-full border-b-2 border-primary-400 focus:outline-none focus:border-orange-800 bg-white text-black placeholder-primary-400"
                  autoComplete="off"
                  placeholder="N"
                />
                <label
                  htmlFor="nombre"
                  className="absolute left-0 -top-3 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary-400 peer-placeholder-shown:top-2 transition-all peer-focus:text-sm peer-focus:text-primary-400"
                >
                  Nombre Completo
                </label>
              </div>
              <div className="relative my-5">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={form?.email}
                  onChange={handleChange}
                  className="peer h-10 w-full border-b-2 border-primary-400 focus:outline-none focus:border-orange-800 bg-white text-black placeholder-primary-400"
                  autoComplete="off"
                  placeholder="E"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary-400 peer-placeholder-shown:top-2 transition-all peer-focus:text-sm peer-focus:text-primary-400"
                >
                  Email
                </label>
              </div>
              <div className="relative pb-3 mt-1 h-20">
                <textarea
                  id="descripcion"
                  name="description"
                  value={form?.description}
                  onChange={handleChange}
                  rows={4}
                  cols={80}
                  autoComplete="off"
                  placeholder="M"
                  className="peer h-10 w-full border-b-2 border-primary-400 focus:outline-none focus:border-orange-800 bg-white text-black placeholder-primary-400"
                />
                <label
                  htmlFor="descripcion"
                  className="absolute left-0 -top-3 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary-400 peer-placeholder-shown:top-0.5 transition-all peer-focus:text-sm peer-focus:text-primary-400"
                >
                  Mensaje
                </label>
              </div>
              <div className="flex justify-center items-center cursor-auto">
                <button
                  type="submit"
                  className="py-3 bg-primary-400 px-6 rounded-full my-3 active:scale-105 transform duration-200 ease-out select-none outline-none  cursor-pointer text-white"
                  onClick={handleSubmit}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>

          {/* bottom part */}
          <div className="grid grid-cols-1 md:grid-cols-3 justify-around items-center mt-10 md:mt-28 pb-20">
            <div className="">
              <h1 className="font-bold flex justify-center text-black">
                Comunicacion General
              </h1>

              <div className="w-full">
                <p className="text-gray-700 flex justify-center text-center">
                  Para consultas generales, tarifas y asocionaciones
                  porfavor contacte
                </p>
                <a
                  className="text-primary-400 hover:underline cursor-pointer flex justify-center"
                  href="mailto:gerencia@metrocleanpa.com"
                >
                  gerencia@metrocleanpa.com
                </a>
              </div>
            </div>

            <div className="flex sm:justify-start justify-center items-center">
              <span className="sm:border-r-2 border-gray-500 h-20 border-b-2 w-44 sm:border-b-0 mb-16 sm:mb-0" />
            </div>

            <div className="">
              <h1 className="font-bold flex justify-center text-black">
                Trabaja con Nosotros
              </h1>

              <div className="w-full">
                <p className="text-gray-700 flex justify-center text-center">
                  Para Oportunidades, horarios y consultas
                </p>
                <a
                  className="text-primary-400 hover:underline cursor-pointer flex justify-center"
                  href="mailto:gerencia@metrocleanpa.com"
                >
                  reclutamiento@metrocleanpa.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Contacto;
