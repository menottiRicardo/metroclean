import { CheckCircleIcon } from "@heroicons/react/outline";
import { Dispatch, SetStateAction, useEffect } from "react";

interface AlertProps {
  showAlert: boolean;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
}
function Alert({ showAlert, setShowAlert }: AlertProps) {
  return (
    <div>
      {showAlert === true && (
        <div className="absolute inset-0 bg-black opacity-60 h-full w-full z-50"></div>
      )}
      {showAlert === true && (
        <div
          className={`absolute top-20 inset-x-[7%] md:inset-x-[13%] bg-white rounded transition-all duration-700 ${
            showAlert === true ? "opacity-100 z-50" : "opacity-0"
          }`}
        >
          <div className="flex-col flex items-center justify-center p-4">
            <CheckCircleIcon className="h-28 w-28 text-green-600" />
            <p className="text-black font-bold mt-3">
              Descarga Guardada
            </p>
            <button
              onClick={() => setShowAlert(false)}
              className="border border-green-600 rounded-md px-4 py-3 mt-5 text-gray-800 shadow-md hover:text-white hover:bg-green-600 hover:scale-105 transform transition-all"
            >
              Perfecto!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Alert;
