// import React from "react";

function Navbar() {
  return (
    <div className=" px-80 h-20 flex bg-blue-600 w-full  items-center justify-between ">
      <div>
        <img className="h-10" src="/public/Jio_logo.png" alt="" />
      </div>
      <ul className="text-white flex gap-10 font-black mr-12 -ml-12">
        <li>
          <a href="/">Mobile</a>
        </li>
        <li>
          <a href="/">True 5G</a>
        </li>
        <li>
          <a href="/">JioFiber</a>
        </li>
        <li>
          <a href="/">AirFiber</a>
        </li>
        <li>
          <a href="/">Business</a>
        </li>
        <li>
          <a href="/">Devices</a>
        </li>
        <li>
          <a href="/">Apps</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
      </ul>
      <div className="flex gap-5 ">
        <img className="h-10" src="/public/search.png" alt="" />
        <img className="h-10" src="/public/avatar-48.png" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
