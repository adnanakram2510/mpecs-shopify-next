'use client';
import { useEffect, useRef } from 'react';

const videoHero = () => {
  const vidRef = useRef<HTMLVideoElement>(null);
  if (!vidRef) return null;
  useEffect(() => {
    if (vidRef.current) vidRef.current.play();
  }, []);

  return (
    <div className="video-container relative w-full">
      <button className="md:text-md absolute bottom-0 left-1/2 mb-4 mt-4 h-[35px] w-[40%] max-w-[360px] -translate-x-1/2 translate-y-0 transform rounded-full bg-white/95 px-4 text-xs text-[#373975] shadow-[0_5px_60px_-15px_rgba(0,0,0,0.3)] shadow-gray-200 md:mb-0 md:mt-0 md:h-[40px] md:w-[200px] md:-translate-y-full md:px-8">
        <a href="/product/zullu-straps">ORDER YOURS NOW</a>
      </button>
      <video
        loop
        muted
        autoPlay
        playsInline
        preload="metadata"
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nofullscreen nodownload"
      >
        <source src="/watch-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default videoHero;
