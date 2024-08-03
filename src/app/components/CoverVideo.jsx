import React from "react";

function CoverVideo() {
  return (
    <section className="relative">
      <video
        className="h-[30vh] sm:h-[60vh] w-full object-cover"
        src="videos/cover-1080p.mp4"
        autoPlay
        muted
        loop
        aria-label="Cover video showing a dining experience"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 p-4">
        <h1 className="max-w-[450px] sm:max-w-[500px] text-center text-[33px] leading-[37px] sm:text-[48px] sm:leading-[56px] font-bold px-3 sm:px-0">
          Revolutionizing The Dining Experience
        </h1>
      </div>
    </section>
  );
}

export default CoverVideo;
