import React from "react";
import Image from "next/image";
import QR from "@/app/assets/images/qr.svg";

function ScanMe() {
  return (
    <div className="flex gap-5 items-center justify-center">
      <span className="text-[19px] leading-[24px] sm:text-[20px] sm:leading-[25px] font-extrabold">
        Scan <br></br> Me!
      </span>
      <div className="max-w-[75px] sm:max-w-[90px] h-auto">
        <Image src={QR} alt="QR" />
      </div>
    </div>
  );
}

export default ScanMe;
