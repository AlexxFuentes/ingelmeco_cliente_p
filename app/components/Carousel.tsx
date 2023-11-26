"use client";
import Image from "next/image";
import React, { useState } from "react";

interface CarouselProps {
  imageUrl1: string;
  imageUrl2: string;
}

export const Carousel: React.FC<CarouselProps> = ({ imageUrl1, imageUrl2 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [imageUrl1, imageUrl2].filter(Boolean);
  const handlePrevClick = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };
  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  return (
    <div className="relative w-full z-10" data-carousel="static">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 img-filter">
        {carouselItems.map((imageUrl, index) => (
          <div
            key={index}
            className={`duration-200 ease-linear ${
              activeIndex === index ? "block" : "hidden"
            }`}
            data-carousel-item={activeIndex === index ? "active" : undefined}
          >
            <Image
              src={imageUrl}
              className="absolute w-full object-contain"
              alt={`img carousel ingelmeco ${index}`}
              fill={true}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {imageUrl2 !== "" && (
        <div>
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none carousel-button carousel-button-prev"
            data-carousel-prev
            onClick={handlePrevClick}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none carousel-button carousel-button-next"
            data-carousel-next
            onClick={handleNextClick}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
