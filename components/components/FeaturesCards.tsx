
interface FeatureCardsProps {
  title?: string;
  icon: any;
  description: string;
}
function FeaturesCards({
  title,
  icon,
  description,
}: FeatureCardsProps) {
  console.log(icon)
  return (
    <div className="flex sm:inline relative items-center justify-center">
      <div className="bg-primary-400 rounded-xl flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16">
        <div className="py-4 px-3">
          {icon == "S" ? (
            <p className="text-white font-extrabold font-mono text-4xl w-10 h-10 flex items-center justify-center">
              S
            </p>
          ) : (
            icon
          )}
        </div>
      </div>
      <h2 className="font-bold my-3 mx-3 sm:my-3 sm:mx-0 text-black">
        {title == null ? "Tarifa competitiva" : title}
      </h2>
      <p className="text-gray-500 hidden sm:inline-flex text-justify">
        {description}
      </p>
    </div>
  );
}

export default FeaturesCards;
