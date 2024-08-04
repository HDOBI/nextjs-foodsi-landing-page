import React from "react";
import Image from "next/image";

import desktopCard from "@/app/assets/images/CARD DESKTOP.png";
import mobileCard from "@/app/assets/images/CARD MOBILE.png";

function Price() {
  return (
    <div className="price-container bg-whiteSmoke" id="pricing">
      <div
        className="max-w-[700px] mx-auto flex flex-col gap-3 sm:gap-5 py-8 sm:py-14 px-3 lg:px-0"
        aria-label="Price section"
      >
        <h2 className="text-[40px] leading-[45px] sm:text-[45px] sm:leading-[50px] font-semibold text-center">
          Prices
        </h2>
        <p
          className="text-[20px] leading-[25px] sm:text-[24px] sm:leading-[29px] text-center"
          aria-describedby="price-description"
        >
          A plan for every restaurant <br></br> Try a 60 Day Free trial of our{" "}
          <span className="text-orange font-semibold">Pro plan!</span>
        </p>
        <div className="image-container hidden sm:block">
          <Image
            src={desktopCard}
            width={700}
            height={700}
            alt="Desktop price card"
            quality={50}
            className="hidden sm:block"
          />
          <Image
            src={mobileCard}
            width={700}
            height={700}
            alt="Mobile price card"
            quality={50}
            className="sm:hidden mt-5 sm:mt-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Price;
