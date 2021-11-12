import ContactCard from "../components/ContactCard";
import Image from "next/image";
import {
  ChevronDoubleRightIcon,
  PhoneOutgoingIcon,
  PresentationChartBarIcon,
  StarIcon,
} from "@heroicons/react/outline";
import Contactanos from "../components/Contactanos";
function Contact() {
  return (
    <div className="relative">
      <div className="md:left-20 absolute z-10 cursor-pointer top-2 left-2 md:top-20">
        <ContactCard
          title="Agiliza tus Procesos"
          icon={
            <ChevronDoubleRightIcon className="h-5 w-5 text-white" />
          }
        />
      </div>

      <div className="absolute z-10 cursor-pointer top-2 right-2 ml-3 sm:right-10 sm:top-20">
        <ContactCard
          title="Crece tu Negocio"
          icon={<StarIcon className="h-5 w-5 text-white" />}
        />
      </div>
      <div className="absolute z-10 sm:top-5 sm:left-96 sm:ml-16 left-32 ml-3 cursor-pointer top-2">
        <ContactCard
          title="Excelente Servicio"
          icon={
            <PresentationChartBarIcon className="h-5 w-5 text-white" />
          }
        />
      </div>

      <div className="absolute z-10 sm:bottom-10 md:left-96 ml-20 cursor-pointer left-14 bottom-1">
        <Contactanos
          title="Contactanos"
          icon={
            <PhoneOutgoingIcon className="h-5 w-5 text-black" />
          }
        />
      </div>
      <div className="relative h-60 w-full sm:h-96 sm:w-full bg-gray-500 rounded-xl">
        <Image
          src="https://metrocleansite.s3.amazonaws.com/espalda.webp"
          layout="fill"
          className="rounded-xl opacity-20"
          alt=""
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Contact;
