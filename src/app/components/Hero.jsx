import Image from "next/image";
import React from "react";
import mobile from "@/app/assets/images/mobile.png";
import ScanMe from "./ScanMe";

function Hero() {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-center h-auto lg:h-screen text-center py-10 sm:py-16 lg:py-0 px-3 lg:px-0">
      <div className="lg:w-1/2 flex flex-col gap-3 md:gap-6">
        <h1 className="font-extrabold text-[35px] leading-[37px] sm:text-[48px] sm:leading-[54px] md:text-[60px] md:leading-[62px]">
          Turn Your Menu Into An Experience
        </h1>
        <p className="text-[18px] sm:text-[21px] max-w-[500px] mx-auto">
          Digitize your Menu today with Foodsi and watch your orders and
          customer satisfaction skyrocker.
        </p>
        <div className="hidden lg:block">
          <ScanMe />
        </div>
      </div>
      <div className="lg:w-1/2 mt-1 lg:mt-0 flex items-center justify-center">
        <div className="lg:hidden min-w-[150px]">
          <ScanMe />
        </div>
        <div className="max-w-[250px] md:max-w-[300px] lg:max-w-[500px]">
          <Image
            src={mobile}
            height={550}
            alt="Mobile"
            priority={true}
            blurDataURL="data:..."
            placeholder="blur"
            quality={75}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
