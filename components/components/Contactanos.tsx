import Image from "next/image";
interface ContactCard {
  title: string;
  icon?: any;
}
function Contactanos({ title, icon }: ContactCard) {
  return (
    <div className="border-1 shadow-md bg-primary-400 rounded-xl sm:w-44 hover:bg-primary-600 hover:shadow-2xl hover:scale-105 transition duration-200 ease-out transform">
      <div className="p-3 flex items-center flex-col">
        <div className="flex justify-center bg-white rounded-full py-3 px-4 sm:transformw-20">
          {icon}
        </div>

        <h3 className="text-black font-extrabold pt-2 select-none text-sm">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default Contactanos;
