import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/images/testi.png";

function testimonial() {
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 max-w-[1200px] mx-auto px-3 lg:px-0 text-center py-12 sm:py-16">
      <div className="max-w-[75px] sm:max-w-[100px] h-auto">
        <Image src={Logo} width={100} height={100} alt="Foodsi Testimonial Logo" />
      </div>
      <p className="max-w-[350px] sm:max-w-[790px] text-[20px] sm:text-[24px] mt-3 sm:mt-2">
        "Switching to Foodsi has been fantastic! We ve seen a boost in customer
        satisfaction and orders since using it. Highly recommend for any
        restaurant looking to modernize!"
      </p>
      <div>
        <h5 className="text-[20px] sm:text-[24px]">Matthew Monasterio</h5>
        <span className="text-[16.5px]">JG Restaurant</span>
      </div>
    </div>
  );
}

export default testimonial;