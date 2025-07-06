import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AutomaticCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample slides data - you can replace with your own content
  const slides = [
    {
      id: 1,
      title: "Mountain Adventure",
      description: "Explore breathtaking mountain landscapes and discover hidden trails.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Ocean Serenity",
      description: "Dive into crystal clear waters and experience marine life up close.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Desert Dreams",
      description: "Journey through endless dunes and witness stunning sunsets.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Forest Whispers",
      description: "Walk among ancient trees and connect with nature's wisdom.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
        {/* Main carousel container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 relative">
              <div className={` h-96 flex items-center justify-center relative overflow-hidden`}>
                {/* Background image with overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center "
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                
                {/* Content */}
                <div className="relative z-10 text-center text-white px-8 max-w-3xl">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl opacity-90 drop-shadow-md">
                    {slide.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2  bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-white border-opacity-20"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2  bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-white border-opacity-20"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-black scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>

        {/* Auto-play toggle */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-black px-3 py-1 rounded-full text-sm transition-all duration-200 backdrop-blur-sm border border-white border-opacity-20"
          >
            {isAutoPlaying ? 'Pause' : 'Play'}
          </button>
        </div>

        {/* Slide counter */}
        <div className="absolute top-4 left-4 bg-white bg-opacity-20 text-black px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white border-opacity-20">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Controls description */}
      <div className="mt-6 text-center text-gray-600">
        <p className="text-sm">
          Use arrow buttons or dots to navigate • Hover to pause auto-play • Auto-advances every 4 seconds
        </p>
      </div>
    </div>
  );
};

export default AutomaticCarousel;