"use client";
import React from "react";
import Image from "next/image";
import QR from "@/app/assets/images/qr.svg";

function ScanMe() {
  return (
    <div className=" max-w-[195px] mx-auto flex flex-col items-end">
      <div className="flex gap-5 sm:gap-6 items-center justify-center">
        <span className="text-[25px] leading-[31px] sm:text-[28px] sm:leading-[34px] font-extrabold">
          Scan <br /> Me!
        </span>
        <div className="max-w-[85px] sm:max-w-[110px] h-auto">
          <Image src={QR} alt="QR code" priority={true} quality={10} />
        </div>
      </div>
      <a
        onClick={() => window.open("https://github.com/Hassan-154", "_blank")}
        className="cursor-pointer"
      >
        <p className="text-[15.5px] sm:text-[17.5px] max-w-[95px] sm:max-w-[110px] flex justify-end">
          Or{" "}
          <span className="font-semibold mr-0.5 sm:mr-3 pl-0.5 sm:pl-1">
            {" "}
            click here
          </span>
        </p>
      </a>
    </div>
  );
}

export default ScanMe;
