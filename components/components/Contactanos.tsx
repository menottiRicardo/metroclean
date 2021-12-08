import Image from "next/image";
import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createCandidate } from "../../src/graphql/mutations";
interface ContactCard {
  title: string;
  icon?: any;
}
function Contactanos({ title, icon }: ContactCard) {
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
    <div className="shadow-md bg-primary-400 rounded-xl w-full flex-grow flex">
      <div className="p-4">
        <div className="justify-center flex">
          <div className="flex justify-center bg-white rounded-full py-3 px-4 sm:transformw-20 w-16 h-16 items-center">
            {icon}
          </div>
        </div>

        <h3 className="text-black font-extrabold pt-2 select-none text-sm items-center flex justify-center md:text-xl">
          {title}
        </h3>

        <form className="p-1 mt-5" action="#" method="POST">
          <div className="relative">
            <input
              type="text"
              id="nombre"
              name="name"
              value={form?.name}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300  focus:outline-none focus:border-white bg-primary-400 placeholder-transparent text-white"
              autoComplete="off"
              placeholder="N"
            />
            <label
              htmlFor="nombre"
              className="absolute left-0 -top-3 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:text-sm peer-focus:text-white-400"
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
              className="peer h-10 w-full border-b-2 border-gray-300  focus:outline-none focus:border-white bg-primary-400 placeholder-transparent text-white"
              autoComplete="off"
              placeholder="E"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:text-sm peer-focus:text-white-400"
            >
              Email
            </label>
          </div>
          <div className="relative pb-3 mt-1 h-20">
            {/* <input
              type="text"
              
              className="peer h-10 w-full border-b-2 border-gray-300  focus:outline-none focus:border-white bg-primary-400 placeholder-transparent text-white"
              autoComplete="off"
              placeholder="M"
            /> */}
            <textarea
              id="descripcion"
              name="description"
              value={form?.description}
              onChange={handleChange}
              rows={3}
              cols={80}
              autoComplete="off"
              placeholder="M"
              className="peer scrollbar h-30 w-full border-b-2 border-gray-300  focus:outline-none focus:border-white bg-primary-400 placeholder-transparent text-white"
            />
            <label
              htmlFor="descripcion"
              className="absolute left-0 -top-3.5 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:-top-0.5 transition-all peer-focus:text-sm peer-focus:text-white-400"
            >
              Mensaje
            </label>
          </div>
          <div className="flex justify-center items-center cursor-auto">
            <button
              type="submit"
              className="py-3 bg-white px-6 rounded-full my-3 active:scale-105 transform duration-200 ease-out select-none outline-none  cursor-pointer text-black"
              onClick={(event) => event.preventDefault()}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactanos;
