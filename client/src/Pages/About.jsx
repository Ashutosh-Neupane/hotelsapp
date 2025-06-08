import React from "react";

const About = () => {
  return (
    <section className="text-center px-4 h-[100vh] bg-gray-100 py-8 pt-16 ">
      <h2 className="text-3xl font-bold mb-4">
        Our Most Amazing <br />
        Visited Hotel in 2025
      </h2>
      <p className="text-gray-600 mb-8">
        Take a look at our top hotel choices. <br />
        We picked the best for you.
      </p>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 items-stretch max-w-5xl h-[65vh] mx-auto">
        {/* Left large image */}
        <div className="relative row-span-2 w-full h-full rounded-lg overflow-hidden transition  hover:scale-105">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=870&q=80"
            alt="Hotel 1"
          />
          <div className="absolute inset-0 bg-transparent text-left bg-opacity-40 flex flex-col items-start justify-end p-5">
            <h3 className="text-white text-2xl font-bold">Oasis Sand Resort <br/> Homestay</h3>
            <p className="text-white text-xl font-bold"><span>Palm Jumeriah , Dubai</span> <span>| 4.8 rating</span></p>
          </div>
        </div>
          {/* Top-right small image */}
        <div className="relative  w-full h-full rounded-lg overflow-hidden transition  hover:scale-105">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=870&q=80"
            alt="Hotel 1"
          />
          <div className="absolute inset-0 bg-transparent text-left bg-opacity-40 flex flex-col items-start justify-end p-5">
            <h3 className="text-white text-xl font-bold">Oasis Sand Resort <br/> Homestay</h3>
            <p className="text-white text-l font-bold"><span>Palm Jumeriah , Dubai</span> <span>| 4.8 rating</span></p>
          </div>
        </div>
        <div className="relative  w-full h-full rounded-lg overflow-hidden transition  hover:scale-105">
          <img
            className="w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=870&q=80"
            alt="Hotel 1"
          />
          <div className="absolute inset-0 bg-transparent text-left bg-opacity-40 flex flex-col items-start justify-end p-5">
            <h3 className="text-white text-l font-bold">Oasis Sand Resort <br/> Homestay</h3>
            <p className="text-white text-xl font-bold"><span>Palm Jumeriah , Dubai</span> <span>| 4.8 rating</span></p>
          </div>
        </div>
        

      
      
      </div>
    </section>
  );
};

export default About;
