import React from "react";
import background from "../assets/background1.png"

const Home = () => {
  return (
    <section
      className="bg-black text-white overflow-hidden h-screen flex flex-col justify-center items-center "
      style={{
        backgroundImage: `url(${background})`, // Use the imported 'background' variable here
        backgroundSize: "cover", // Optional: make sure the image covers the section
        backgroundPosition: "center", // Optional: center the image
        backgroundRepeat: "no-repeat", // Optional: prevent image repetition
      }}
    >
      {/* Hero content */}
      <div className="flex gap-20 items-center justify-between p-4 max-w-7xl mx-auto w-full">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            Stay Quietly,
            <br />
            With No Worries
          </h1>
          <p className="font-light md:text-lg lg:text-2xl text-justify">
            Welcome to our hotel booking platform, where your travel experience
            becomes easier and more enjoyable. With our platform, you can
            discover the perfect accommodations for your next stay.
          </p>
        </div>
        <ul className="flex flex-col gap-12 text-2xl w-1/4 text-right">
          <li>
            <strong>12K+</strong> <br />
            Satisfied Visitors
          </li>
          <li>
            <strong>4.5K+</strong> <br />
            Amazing Tour Guides
          </li>
          <li>
            <strong>1K+</strong> <br />
            Happy Customers
          </li>
        </ul>
      </div>

      {/* Search form */}
      <form className="flex flex-wrap align-middle  justify-center items-center gap-4  bg-white text-black rounded-lg p-4 mt-8 w-full max-w-4xl shadow-lg">
        <label htmlFor="location" className="flex flex-col">
          <span className="text-sm font-medium">Location</span>
          <input
            id="location"
            type="text"
            placeholder="Enter location"
            className="p-2 rounded-lg border border-gray-300 w-48"
          />
        </label>

        <label htmlFor="person" className="flex flex-col">
          <span className="text-sm font-medium">Persons</span>
          <input
            id="person"
            type="number"
            min="1"
            placeholder="1"
            className="p-2 rounded-lg border border-gray-300 w-24"
          />
        </label>

        <label htmlFor="checkin" className="flex flex-col">
          <span className="text-sm font-medium">Check-in</span>
          <input
            id="checkin"
            type="date"
            className="p-2 rounded-lg border border-gray-300 w-40"
          />
        </label>

        <label htmlFor="checkout" className="flex flex-col">
          <span className="text-sm font-medium">Check-out</span>
          <input
            id="checkout"
            type="date"
            className="p-2 rounded-lg border border-gray-300 w-40"
          />
        </label>
        <span className="pt-2">
          <button
            type="submit"
            className="bg-black  text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Search
          </button>
        </span>
      </form>
    </section>
  );
};

export default Home;
