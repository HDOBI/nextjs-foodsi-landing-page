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
              <h5 className="max-w-[340px] text-[40px] leading-[45px] sm:text-[45px] sm:leading-[50px] font-semibold">
                {item.heading}
              </h5>
              <p className="max-w-[400px] text-[20px] leading-[25px] sm:text-[24px] sm:leading-[29px]">
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
              {item.media.endsWith(".mp4") ? (
                <video
                  className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] object-cover rounded-[27px] sm:rounded-[20px]"
                  src={item.media}
                  autoPlay
                  muted
                  loop
                  aria-label="Cover video showing a dining experience"
                />
              ) : (
                <Image
                  src={item.media}
                  width={500}
                  height={500}
                  alt={item.heading}
                  quality={50}
                  blurDataURL="data:..."
                  placeholder="blur"
                  className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] object-cover rounded-[27px] sm:rounded-[20px]"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Service;
