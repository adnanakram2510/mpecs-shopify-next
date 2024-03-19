'use client';
import React from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [loadTrigger, setLoadTrigger] = React.useState(false);

  const selectedImage = images[selectedImageIndex]?.src || 'https://placehold.co/600x600';

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setLoadTrigger((prev) => !prev);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setLoadTrigger((prev) => !prev);
  };

  const renderDots = () => {
    return images.map((_, index) => (
      <span
        key={index}
        className={`mx-1 inline-block h-3 w-3 rounded-full ${
          selectedImageIndex === index ? 'bg-white' : 'border border-white'
        }`}
        onClick={() => setSelectedImageIndex(index)}
      ></span>
    ));
  };

  return (
    <>
      <div className="relative flex items-center justify-center pt-16">
        <button
          onClick={prevImage}
          className={`mx-3 text-white ${selectedImageIndex > 0 ? '' : 'invisible'}`}
        >
          <MdOutlineKeyboardArrowLeft className="mb-3 h-8 w-8 sm:mb-0" />
        </button>
        <img
          key={selectedImageIndex}
          src={selectedImage}
          alt="Selected Image"
          className="fade-in3 mb-8 h-72 w-72 object-contain md:h-[600px] md:w-[600px]"
        />
        <button
          onClick={nextImage}
          className={`mx-3 text-white ${selectedImageIndex < images.length - 1 ? '' : 'invisible'}`}
        >
          <MdOutlineKeyboardArrowRight className="mb-3 h-8 w-8 sm:mb-0" />
        </button>
        <div className="absolute bottom-0 mb-2 flex w-full justify-center">{renderDots()}</div>
      </div>
    </>
  );
}
