import React, { useState, useEffect } from 'react';

const images = [
  '/carrusel1.jpg',
  '/carrusel2.jpg',
  '/carrusel3.jpg',
  '/tienda1.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" realtive w-screen  overflow-hidden">
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0 object-cover object-center h-screen" />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${currentIndex === index ? 'bg-white' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
