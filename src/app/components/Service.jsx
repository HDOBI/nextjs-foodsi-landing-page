import React from "react";
import Image from "next/image";
import data from "@/app/utility/service.json";

function Service() {
  return (
    <div>
      {data.map((item, id) => (
        <div key={id} className={id % 2 === 1 ? "bg-whiteSmoke" : undefined}>
          <div
            className={`max-w-[1200px] mx-auto flex gap-10 py-10 sm:py-20 px-3 ${
              id % 2 === 1
                ? "flex-col lg:flex-row-reverse"
                : "flex-col lg:flex-row"
            }`}
          >
            <div className="lg:w-1/2 flex flex-col gap-4 sm:gap-6 items-center justify-center text-center">
              <h5 className="max-w-[360px] text-[38px] leading-[42px] sm:text-[42px] sm:leading-[48px] font-semibold">
                {item.heading}
              </h5>
              <p className="max-w-[400px] text-[20px] sm:text-[22px]">
                {item.subHeading}
              </p>
            </div>
            <div
              className={`lg:w-1/2 flex ${
                id % 2 === 1
                  ? "justify-center lg:justify-start"
                  : "justify-center lg:justify-end"
              }`}
            >
              <Image
                src={item.image}
                width={500}
                height={500}
                className="rounded-[25px] sm:rounded-[20px]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Service;
