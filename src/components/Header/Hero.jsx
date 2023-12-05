// import React from 'react'
import "./hero.css";
function Hero() {
  return (
    <div className="hero text-white gap-5 justify-center">
      <h2 className="text-7xl font-black ">Introducing</h2>
      <h2 className="text-7xl font-black ">JioAirFiber</h2>
      <p className="text-2xl font-semibold">
        India's latest home entertainment and Wi-Fi service.
      </p>
      <div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-full focus:outline-none focus:shadow-outline">
          Book Now
        </button>
        <button className="bg-transparent   font-semibold  py-3 px-5 border border-blue-300 hover:border-blue-200 rounded-full ml-3">
          Watch Features
        </button>
      </div>
    </div>
  );
}

export default Hero;
