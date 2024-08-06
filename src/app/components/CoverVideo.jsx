import React from "react";

function CoverVideo() {
  return (
    <div className="relative">
      <video
        className="h-[30vh] sm:h-[55vh] w-full object-cover"
        src="videos/cover-1080p.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Cover video showing a dining experience"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 p-4">
        <h1 data-aos="fade-up" className="max-w-[450px] sm:max-w-[500px] text-center text-[33px] leading-[37px] sm:text-[48px] sm:leading-[56px] font-bold px-3 sm:px-0">
          Revolutionizing The Dining Experience
        </h1>
      </div>
    </div>
  );
}

export default CoverVideo;
