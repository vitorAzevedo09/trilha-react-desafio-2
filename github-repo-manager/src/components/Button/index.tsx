import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  return (
    <div className="bg-white w-40 h-12 rounded-lg flex items-center justify-center shadow-md text-gray-500 hover:bg-blue-100 transition-colors duration-300">
      <button {...props}>Buscar</button>
    </div>
  )
}

export default Button;

