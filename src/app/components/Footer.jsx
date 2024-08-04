import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/images/footer-icon.png";

const Footer = () => {
  return (
    <footer className="bg-whiteSmoke">
      <div className="container max-w-[1400px] mx-auto flex items-center justify-between py-10 px-3 lg:px-0">
        <div className="flex items-center gap-3 sm:gap-5">
          <figure>
            <Image
              src={Logo}
              width={100}
              height={100}
              alt="Foodsi logo"
              quality={25}
              className="w-[60px] sm:w-[75px] h-auto"
            />
          </figure>
          <div className="flex flex-col">
            <h2 className="text-orange font-bold text-[16.5px] sm:text-[20px]">
              Foodsi
            </h2>
            <p className="text-[15px] sm:text-[17px] -mt-1">
              Build your digital menu.
            </p>
            <Link
              href="mailto:info@foodsiapp.com"
              className="text-[15px] sm:text-[17px] -mt-1"
            >
              info@foodsiapp.com
            </Link>
          </div>
        </div>
        <small className="text-[15.5px] sm:text-[17px] pt-[20px]">
          &copy; Copyright 2024. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
