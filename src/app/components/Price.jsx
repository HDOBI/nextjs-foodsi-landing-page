import React from "react";
import data from "@/app/utility/peice.json";
import { IoHomeOutline } from "react-icons/io5";
import Button from "./Button";
import { CiCircleCheck } from "react-icons/ci";
import Link from "next/link";

function Price() {
  return (
    <div
      className="price-container bg-whiteSmoke flex items-center justify-center"
      id="pricing"
    >
      <div
        className="max-w-[615px] mx-auto flex flex-col gap-3 sm:gap-8 py-10 sm:py-12 px-3 lg:px-0"
        aria-label="Price section"
      >
        <h2
          data-aos="fade-up"
          className="text-[40px] leading-[45px] sm:text-[45px] sm:leading-[50px] font-semibold text-center"
        >
          Prices
        </h2>
        <p
          data-aos="fade-up"
          className="text-[20px] leading-[25px] sm:text-[24px] sm:leading-[29px] text-center"
          aria-describedby="price-description"
        >
          A plan for every restaurant <br></br> Try a 60 Day Free trial of our{" "}
          <span className="text-orange font-semibold">Pro plan!</span>
        </p>
        <div
          className="max-w-[280px] mx-auto sm:max-w-full mt-3 sm:mt-0 grid grid-cols-1 md:grid-cols-2 gap-10"
          data-aos="fade-up"
        >
          {data.plans.map((plan, id) => (
            <div
              key={id}
              className={`flex flex-col gap-2 p-5 rounded-[15px] shadow-lg ${
                id === 1 ? "bg-[#171717] text-white" : "bg-white"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <IoHomeOutline size={25} />
                <span className="text-[17px]">{plan.heading}</span>
              </div>
              <p className="text-[30px] font-semibold leading-[33px]">
                {plan.price}
              </p>
              <p className="text-[20px]">{plan.subheading}</p>
              <Link href="#contact">
                <Button
                  name={data.buttonName}
                  className={`!text-black pt-0.5 pb-0.5 ${
                    id === 1 ? "!text-white" : ""
                  }`}
                />
              </Link>
              <ul className="text-[16px] font-normal mt-1">
                {plan.benefits.map((benefit, id) => (
                  <div>
                    <div className="flex gap-1 items-center">
                      <CiCircleCheck size={21} className="text-orange" />
                      <li key={id}>{benefit}</li>
                    </div>
                    {id < plan.benefits.length - 1 && (
                      <div className="border-t border-gray-400 my-[3px]"></div>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Price;
