"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  'https://placekitten.com/800/500',
  'https://placekitten.com/801/500',
  'https://placekitten.com/802/500',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(handleNext, 3000); // Auto-slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex]);

  return (
    <div 
      className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center justify-between absolute top-1/2 w-full px-4 z-10">
        <button onClick={handlePrev} className="bg-white p-2 rounded-full shadow">❮</button>
        <button onClick={handleNext} className="bg-white p-2 rounded-full shadow">❯</button>
      </div>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Carousel;
