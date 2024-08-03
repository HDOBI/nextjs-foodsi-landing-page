import React from "react";

const Button = ({ className = "", name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-2 rounded-[10px] sm:rounded-[7px] text-white bg-orange font-medium ${className}`}
    >
     {name}
    </button>
  );
};

export default Button;
