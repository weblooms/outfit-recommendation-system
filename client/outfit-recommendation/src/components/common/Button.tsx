import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "outlined" | "green";
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  type = "button",
}) => {
  const baseStyles = "px-4 py-2 text-white font-medium transition";
  const primaryStyles =
    "bg-pink-600 hover:bg-pink-700 rounded-full shadow-lg";
  const outlinedStyles =
    "bg-transparent border border-white hover:bg-white hover:text-black rounded";
const greenStyles = "bg-green-500 hover:bg-green-600 rounded-full shadow-lg";

 const combinedStyles =
  variant === "outlined"
    ? `${baseStyles} ${outlinedStyles}`
    : variant === "green"
    ? `${baseStyles} ${greenStyles}`
    : `${baseStyles} ${primaryStyles}`; // default is 'primary'

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {label}
    </button>
  );
};

export default Button;
