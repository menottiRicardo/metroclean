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
    <section className="grid grid-cols-3 gap-3 gap-y-10 items-center justify-items-center relative py-10 sm:px-10">
      <div className="">
        <ContactCard
          title="Agiliza tus Procesos"
          icon={
            <ChevronDoubleRightIcon className="h-5 w-5 text-white" />
          }
        />
      </div>

      <div className="">
        <ContactCard
          title="Crece tu Negocio"
          icon={<StarIcon className="h-5 w-5 text-white" />}
        />
      </div>
      <div className="">
        <ContactCard
          title="Excelente Servicio"
          icon={
            <PresentationChartBarIcon className="h-5 w-5 text-white" />
          }
        />
      </div>
      <div className="col-span-3 z-40">
        <Contactanos
          title="Contactanos"
          icon={<PhoneOutgoingIcon className="h-5 w-5 text-black" />}
        />
      </div>
      <div className="absolute rounded-xl w-full h-full top-0 left-0 opacity-40 overflow-hidden z-0">
        <Image
          src="https://metrocleansite.s3.amazonaws.com/espalda.webp"
          layout="responsive"
          className="rounded-xl opacity-20"
          alt=""
          width={300}
          height={450}
          objectFit="cover"
        />
      </div>
    </section>
  );
}

export default Contact;
