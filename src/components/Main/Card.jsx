// import React from 'react'
import "./card.css";
function Card() {
  return (
    <div className="card flex flex-col items-center justify-center gap-5 w-full rounded-3xl p-20">
      <img src="/airfiber-icon.svg" alt="" />
      <p className="text-white font-black text-5xl">
        JioAirFiber is now available in 494
      </p>
      <p className="text-white font-black text-5xl">towns</p>
      <p className="text-white font-semibold text-lg">
        Check the availability in your location.
      </p>
      <button className="text-black bg-white text-md font-semibold flex items-center gap-40 px-4 py-2 rounded-full">
        Select your state
        <svg
          className="w-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.71 9.21l-4 4a1.002 1.002 0 01-1.42 0l-4-4a1.003 1.003 0 111.42-1.42l3.29 3.3 3.29-3.3a1.004 1.004 0 011.42 1.42z"
            fill="currentColor"
          ></path>
        </svg>{" "}
      </button>
      <button className="bg-transparent  text-white font-bold  py-3 px-5 border border-blue-300 hover:border-blue-200 rounded-full ml-3">
        Get JioAirFiber
      </button>
      <img src="/ribbon-arifiber.png" alt="" />
    </div>
  );
}

export default Card;
