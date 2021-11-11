import Button from "../components/Button";
import Image from "next/image";
import { ArrowDownIcon } from "@heroicons/react/solid";
import Logo from "../components/Logo";
function Hero() {
  return (
    <div className="pt-3 sm:mt-10">
      {/* <div className="relative">
        <Logo />
      </div> */}
      {/* left side */}
      <div className="sm:flex sm:justify-between sm:items-center">
        <div className="w-full">
          {/* hero bold text */}
          <div className="sm:inline hidden">
            <h1 className="font-bold text-4xl text-black">Manejo de personal</h1>
            <h1 className="font-bold text-4xl text-black">para agilizar</h1>
            <h1 className="font-bold text-4xl text-primary-400">
              tu negocio
            </h1>
          </div>
          <div className="sm:hidden mt-3">
            <h1 className="font-bold text-4xl text-black">
              Manejo de personal para agilizar
            </h1>
            <h1 className="font-bold text-4xl text-primary-400">
              tu negocio
            </h1>
          </div>

          {/* hero light text */}
          <div className="items-center flex pt-2 sm:mt-3">
            <h1 className="font-light text-gray-700 text-lg justify-center items-center">
              Una empresa panameña dedicada al manejo de personal con
              5+ anos de experiencia
            </h1>
          </div>

          {/* buttons */}
          <div className="mt-4 sm:mt-16 justify-center flex">
            <Button text="Contactanos" color="primary" />
            <Button text="Servicios" />
          </div>
        </div>

        {/* right Side */}
        <div className="w-full">
          {/* image */}
          <div className="flex justify-center">
            <div className="relative w-96 h-96 mt-4 ">
              <Image
                src="https://metrocleansite.s3.amazonaws.com/empkeados.png"
                layout="fill"
                objectFit="fill"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center flex mt-4 animate-bounce">
        <ArrowDownIcon className="h-5 w-5 flex justify-center" />
      </div>
    </div>
  );
}

export default Hero;
