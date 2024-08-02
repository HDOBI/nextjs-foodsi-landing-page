import React from "react";
import Image from "next/image";
import data from "@/app/utility/service.json";

function Service() {
  return (
    <div className="max-w-[1200px] mx-auto">
      {data.map((item, id) => (
        <div
          key={id}
          className={`flex flex-row py-10 sm:py-20 ${
            id % 2 === 1 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="w-1/2 flex flex-col gap-6 items-center justify-center text-center">
            <h5 className="max-w-[360px] text-[42px] leading-[48px] font-semibold">
              {item.heading}
            </h5>
            <p className="max-w-[400px] text-[22px]">{item.subHeading}</p>
          </div>
          <div
            className={`w-1/2 flex ${
              id % 2 === 1 ? "justify-start" : "justify-end"
            }`}
          >
            <Image
              src={item.image}
              width={500}
              height={500}
              className="rounded-[20px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Service;
