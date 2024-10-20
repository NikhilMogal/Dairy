
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Carousel() {
  const images = [
    "https://cdnasd.countrydelight.in/cdproductimg/new-website/3480x1321-banner.webp_1721044402050.webp",
    "https://cdnasd.countrydelight.in/cdproductimg/new-website/4PE4WEBSITEHEROBANNER.jpg_1724396937712.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); 

    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
    <div className="relative flex justify-center items-center w-full  md:h-[85vh] bg-gray-200">
      <div className="w-full max-w-6xl flex justify-center items-center">
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          className="w-full h-auto object-cover rounded-xl transition-opacity ease-in-out duration-500"
        />
      </div>

      {/* <button
        className="absolute top-1/2 left-3 sm:left-5 transform -translate-y-1/2 text-gray-800 text-xl sm:text-2xl bg-white bg-opacity-80 p-2 sm:p-3 rounded-full hover:bg-opacity-100 transition duration-300"
        onClick={goToPrevious}
      >
        <FaArrowLeft />
      </button>
    
      <button
        className="absolute top-1/2 right-3 sm:right-5 transform -translate-y-1/2 text-gray-800 text-xl sm:text-2xl bg-white bg-opacity-80 p-2 sm:p-3 rounded-full hover:bg-opacity-100 transition duration-300"
        onClick={goToNext}
      >
        <FaArrowRight />
      </button> */}
    </div>
  );
}

export default Carousel;
