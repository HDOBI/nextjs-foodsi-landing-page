import React from "react";
import Image from "next/image";
import QR from "@/app/assets/images/qr.svg";

function ScanMe() {
  return (
    <div className="flex gap-5 sm:gap-6 items-center justify-center">
      <span className="text-[25px] leading-[31px] sm:text-[28px] sm:leading-[34px] font-extrabold">
        Scan <br></br> Me!
      </span>
      <div className="max-w-[85px] sm:max-w-[110px] h-auto">
        <Image
          src={QR}
          alt="QR code"
          priority
          quality={25}
        />
      </div>
    </div>
  );
}

export default ScanMe;
