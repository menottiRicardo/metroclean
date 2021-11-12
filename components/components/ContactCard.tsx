import Image from "next/image";
interface ContactCard {
  title: string;
  icon?: any;
}
function ContactCard({ title, icon }: ContactCard) {
  return (
    <div className="border-1 shadow-md bg-white rounded-xl md:w-44 w-24">
      <div className="p-3 flex items-center flex-col">
        <div className="flex justify-center bg-primary-400 rounded-full md:py-3 md:px-4 w-10 h-10 items-center md:w-16">
          {icon}
        </div>

        <h3 className="text-black font-medium pt-2 text-sm md:text-base select-none">{title}</h3>
        <p className="text-black pt-2 hidden md:inline-flex text-justify select-none">
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}

export default ContactCard;
