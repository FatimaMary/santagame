import React, { useState, useEffect } from 'react';
import './Slider.css';
import { slidesData } from './slidesData';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const getVisibleSlides = () => {
    const start = currentSlide;
    const end = (start + 1) % slidesData.length;
    return [slidesData[start], slidesData[end]];
  };

  const handleDotClick = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="slider">
      <div className="slider-images">
        {getVisibleSlides().map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className={`slider-image ${index === 0 ? 'visible' : ''}`}
          />
        ))}
        {/* <div className="slider-text">
          {slidesData[currentSlide].text}
        </div> */}
      </div>
      <div className="slider-dots">
        {slidesData.map((slide, index) => (
          <button
            key={slide.id}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
