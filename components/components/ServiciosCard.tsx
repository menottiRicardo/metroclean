import Image from "next/image";
interface SerServiciosCardProps {
  title: string;
  color: string;
  url: string;
  style?: string;
}
function ServiciosCard({ title, color,url,style }: SerServiciosCardProps) {
  return (
    <div className="active:scale-110 transform ease-in duration-200 active:z-50 cursor-pointer hover:scale-110">
      <div className="w-full sm:flex">
        <p className={`z-10 absolute text-white text-2xl flex mt-20 ${style} sm:mt-44 sm:pt-20 cursor-none select-none`}>
          {title}
        </p>
        <div className="flex justify-center bg-red-100">
          <div className={`relative bg-gray-${color} w-96 h-40 sm:h-screen`}>
            <Image
              src={url}
              layout="fill"
              objectFit="cover"
              className="rounded-xl opacity-50 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiciosCard;
