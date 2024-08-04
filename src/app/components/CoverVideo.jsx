'use client'
import { useEffect, useState } from "react";

function CoverVideo() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setVideoLoaded(true);
  }, []);

  return (
    <div className="relative">
      {videoLoaded && (
        <video
          className="h-[30vh] sm:h-[55vh] w-full object-cover"
          src="videos/cover-1080p.mp4"
          autoPlay
          muted
          loop
          aria-label="Cover video showing a dining experience"
        />
      )}
      {/* ... */}
    </div>
  );
}

export default CoverVideo;
