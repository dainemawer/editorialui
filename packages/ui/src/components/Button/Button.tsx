import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", className, ...props }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white"
      {...props}
    />
  );
};

export default Button;
