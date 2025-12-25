import React from "react";
import FinalLogo from "../assets/FinalLogo.png";

export default function Navbar() {
  return (
    <nav className="w-full bg-white  relative ">
      
      {/* LOGO WITH EXACT SIZE & POSITION */}
      <div className="absolute top-4.5 left-13 w-76 h-19.5 flex items-center justify-center ">
        <img
          src={FinalLogo}
          alt="Quick Creatives"
          className="w-38.5 h-auto object-fit ml-60"
        />
      </div>

      {/* NAV CONTENT */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-end h-20 gap-10">
          
          {/* LINKS */}
          <div className="nav flex items-center gap-8 ml-9 font-medium">
            <a href="#" className="text-green-500 ">Home</a>
            <a href="#" className="hover:text-green-500">Services</a>
            <a href="#" className="hover:text-green-500">About Us</a>
            <a href="#" className="hover:text-green-500">Contact</a>
          </div>

          {/* BUTTON */}
          <button className="leftBtn bg-black mt-9 h-11 text-white  px-8 py-2 ml-26 rounded-md hover:bg-gray-800">
            Let’s Discuss
          </button>

        </div>
      </div>
    </nav>
  );
}
