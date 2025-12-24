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
          className="w-50 h-auto object-fill"
        />
      </div>

      {/* NAV CONTENT */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-end h-20 gap-10">
          
          {/* LINKS */}
          <div className="flex items-center gap-8 font-medium">
            <a href="#" className="text-green-500">Home</a>
            <a href="#" className="hover:text-green-500">Services</a>
            <a href="#" className="hover:text-green-500">About Us</a>
            <a href="#" className="hover:text-green-500">Contact</a>
          </div>

          {/* BUTTON */}
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
            Let’s Discuss
          </button>

        </div>
      </div>
    </nav>
  );
}
