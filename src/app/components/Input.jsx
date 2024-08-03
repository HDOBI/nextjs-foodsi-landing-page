import React from "react";

const Input = ({ type = "text", name, value, onChange, className = "", label }) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-[17px] font-medium pb-1.5">{label}</label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`border border-lightGray p-2 w-full h-[40px] outline-none rounded-[10px] sm:rounded-[7px] ${className}`}
      />
    </div>
  );
};

export default Input;
