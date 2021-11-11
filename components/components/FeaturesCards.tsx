import { CashIcon } from "@heroicons/react/outline";

interface FeatureCardsProps {
  title?: string;
  icon?: string;
}
function FeaturesCards({ title, icon }: FeatureCardsProps) {
  return (
    <div className="flex p-2 sm:inline">
      <div className="bg-primary-400 rounded-xl flex justify-center items-center w-16 h-16 sm:w-16 sm:h-16">
        <div className="py-4 px-3">
          {icon == "S" ? (
            <p className="text-white font-extrabold font-mono text-4xl w-10 h-10 flex items-center justify-center">
              S
            </p>
          ) : (
            <CashIcon className="w-10 h-10 text-white" />
          )}
        </div>
      </div>
      <h2 className="font-bold my-3 mx-3 sm:my-3 sm:mx-0 text-black">
        {title == null ? "Tarifa competitiva" : title}
      </h2>
      <p className="text-gray-500 hidden sm:inline-flex text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Voluptatibus repudiandae inventore quis dolorum accusamus
      </p>
    </div>
  );
}

export default FeaturesCards;
