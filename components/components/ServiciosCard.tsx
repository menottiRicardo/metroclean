import Image from "next/image";
interface SerServiciosCardProps {
  title: string;
  color: string;
  url: string;
  style?: string;
}
function ServiciosCard({
  title,
  color,
  url,
  style,
}: SerServiciosCardProps) {
  return (
    <div className="cursor-pointer select-none">
      <div className="relative h-60 w-60 sm:h-80 sm:w-80 hover:scale-105 transform transition duration-300 ease-out">
        <Image
          src={url}
          layout="fill"
          className="rounded-xl"
          alt=""
        />
      </div>
      <h3 className="text-lg sm:text-2xl mt-3 text-black">{title}</h3>
    </div>
  );
}

export default ServiciosCard;
