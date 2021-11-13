interface ButtonProps {
  text: string;
  color?: string;
}
function Button({ text, color }: ButtonProps) {
  let bg = "bg-white hover:bg-gray-100 hover:scale-90";
  let textColor = 'text-black'
  if (color == "primary") {
    bg = "bg-primary-400";
    textColor = "text-white"
  }
  return (
    <button className={`rounded-md border-1 shadow-md ${bg} w-full font-medium hover:cursor-pointer m-2 sm:w-32 hover:scale-105 hover:shadow-lg sm:mx-7`}>
      <p className={`${textColor} font-medium px-8 py-3 text-base sm:text-sm justify-center flex`}>{text}</p>
    </button>
  );
}

export default Button;
