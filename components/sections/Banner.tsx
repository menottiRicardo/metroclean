import Image from "next/image";
function Banner() {
  return (
    <div className="w-full bg-gray-100">
      <div id="image" className="relative w-full h-96">
        <Image
          src="https://metrocleansite.s3.amazonaws.com/espalda.webp"
          layout="fill"
          objectFit="cover"
          //   width={500}
          //   height={500}
          className="opacity-60"
        />
      </div>
    </div>
  );
}

export default Banner;
