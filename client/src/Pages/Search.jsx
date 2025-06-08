import React, { useState } from "react";

const Search = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const hotels = Array(6).fill({
    name: "Emerald Valley Lodge",
    location: "New Zealand, Australia",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=870&q=80",
  });

  return (
    <section className="pt-20 px-4">
      <div className="flex justify-between items-start w-[80%] mx-auto md:flex-row gap-6">
        <div className="flex-1/2">
          <h1 className="font-bold text-5xl mb-2">
            Explore Our Best List <br />
            5-Stars Hotel!
          </h1>
        </div>

        <div className="max-w-md w-full flex-1/2">
          <p className="text-gray-600 text-md mb-2">
            We understand that every traveler has different preferences. That's
            why our platform is designed to help you find the perfect stay.
          </p>
          <label
            htmlFor="findHotel"
            className="w-full block border border-gray-300 rounded-2xl"
          >
            <input
              type="text"
              id="findHotel"
              name="findHotel"
              className="p-2 w-full"
              placeholder="Find hotel"
            />
          </label>
        </div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {hotels.map((hotel, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="shadow p-4 rounded-lg transition hover:scale-105"
          >
            <img
              src={hotel.image}
              alt={`Image of ${hotel.name}`}
              className={`object-cover rounded-md w-full ${
                hoveredIndex === index ? "h-40" : "h-48"
              }`}
            />
            <h6 className="text-lg font-semibold mt-2">{hotel.name}</h6>
            <p className="text-sm text-gray-500">
              {hotel.location}
              <span className="ml-2 text-yellow-500 font-bold">
                {hotel.rating}
              </span>
            </p>
            {hoveredIndex === index && (
              <button className="text-white py-2 mx-auto mt-2 mb-1.5 px-4 rounded-full bg-black w-full hover:bg-gray-800 border border-gray-300 transition cursor-pointer">
                View More
              </button>
            )}
          </li>
        ))}
      </ul>

      <div className="text-center mt-6">
        <button className="text-black py-2 mb-1.5 px-4 rounded-full hover:bg-gray-400 border border-gray-300 transition hover:scale-105 font-semibold">
          View More Hotels
        </button>
      </div>
    </section>
  );
};

export default Search;
