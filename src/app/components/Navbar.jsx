"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import navMenu from "../utility/navbar.json";
import Image from "next/image";
import logo from "@/app/assets/images/LOGO-nav.png";
import Button from "./Button";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="w-full h-20 navbar z-10 bg-whiteSmoke">
      <div className="container mx-auto max-w-[1200px] px-3 text-black">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <Image
              src={logo}
              width={120}
              height={120}
              alt="logo"
              priority={true}
              quality={18}
              className="max-w-[90px] sm:max-w-[120px] h-auto"
            />
            <ul
              className={`md:flex ${
                nav ? "translate-x-0 text-center" : "-translate-x-full"
              } transform md:transform-none text-[16px] font-normal transition-transform duration-300 ease-in-out flex-col md:flex-row items-center w-full md:w-auto space-y-6 md:space-y-0 md:space-x-10 absolute md:relative bg-whiteSmoke md:bg-transparent top-20 md:top-0 left-0 md:left-auto md:py-0 py-4 pb-8 ${
                loaded ? (nav ? "" : "") : ""
              }`}
            >
              {navMenu.map((item, id) => (
                <li key={id}>
                  <Link
                    className="cursor-pointer"
                    onClick={() => setNav(false)}
                    href={`#${item.link}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <div className="md:hidden max-w-[130px] mx-auto">
                <Link href="#contact">
                  {" "}
                  <Button
                    name="Contact Us"
                    className="font-normal pt-1 pb-2 px-7 text-[15.5px]"
                  />
                </Link>
              </div>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className="md:block hidden">
              <Link href="#contact">
                <Button
                  name="Contact Us"
                  className="font-normal pt-1 pb-2 px-7 text-[15.5px]"
                />
              </Link>
            </div>
            <div
              onClick={handleClick}
              className="md:hidden cursor-pointer z-10"
            >
              {!nav ? (
                <FaBars size={27} className="text-orange" />
              ) : (
                <FaTimes size={27} className="text-orange" />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
