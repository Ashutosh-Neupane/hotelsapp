import React from "react";

const Contact = () => {
  return (
    <section className="pt-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left Section - Links */}
      <div className="grid flex-1/2 grid-cols-3 gap-6">
        <div className="flex flex-col space-y-2">
          <h1 className="font-semibold text-lg">Page</h1>
          <span className="text-gray-400 cursor-pointer">Home</span>
          <span className="text-gray-400 cursor-pointer">Search</span>
          <span className="text-gray-400 cursor-pointer">Blog</span>
          <span className="text-gray-400 cursor-pointer">About us</span>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="font-semibold text-lg">Features</h1>
          <span className="text-gray-400 cursor-pointer">Find Hotels</span>
          <span className="text-gray-400 cursor-pointer">Book Hotels</span>
          <span className="text-gray-400 cursor-pointer">Reviews</span>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="font-semibold text-lg">Cookies</h1>
          <span className="text-gray-400 cursor-pointer">Data Collect</span>
          <span className="text-gray-400 cursor-pointer">Terms</span>
          <span className="text-gray-400 cursor-pointer">Privacy</span>
          <span className="text-gray-400 cursor-pointer">Laws</span>
        </div>
      </div>

      {/* Right Section - Subscription */}
      <div className="bg-gray-100 p-6 rounded-lg shadow flex flex-col space-y-4 flex-1/2 justify-center">
        <h1 className="text-xl font-semibold text-center">
          Don’t Wanna Miss Our Offers?
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <input
            type="email"
            placeholder="Your email @gmail.com"
            className="px-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
        <p className="text-sm text-center text-gray-500">
          You guys better subscribe to our daily newsletter!
        </p>
      </div>
    </section>
  );
};

export default Contact;
