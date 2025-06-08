import React, { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=870&q=80"
,"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=870&q=80",
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=870&q=80"
,"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=870&q=80"
];

const Blog = () => {
  const [current, setCurrent] = useState(0);

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    // Clear timer on component unmount
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="bg-gray-800 pt-20">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="absolute block w-full h-full object-cover top-0 left-0"
          />
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white"
          aria-label="Previous Slide"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white"
          aria-label="Next Slide"
        >
          Next
        </button>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === current ? "bg-blue-600" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
