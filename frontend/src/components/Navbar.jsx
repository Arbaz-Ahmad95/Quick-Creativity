import React, { useState } from "react";
import FinalLogo from "../assets/FinalLogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Bar */}
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <img
            src={FinalLogo}
            alt="Quick Creatives"
            className="mr-4 h-auto w-38"
          />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 font-medium">
            <a href="#" className="text-green-500 text-xs xl:text-sm underline decoration-2">Home</a>
            <a href="#" className="hover:text-green-500">Services</a>
            <a href="#" className="hover:text-green-500">About Us</a>
            <a href="#" className="hover:text-green-500">Contact</a>

            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-white hover:text-black hover:border transition">
              Let’s Discuss
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden  text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden flex flex-col gap-4 pb-6 font-medium">
            <a href="#" className="text-green-500 text-xs">Home</a>
            <a href="#" className="hover:text-green-500 text-xs">Services</a>
            <a href="#" className="hover:text-green-500 text-xs">About Us</a>
            <a href="#" className="hover:text-green-500 text-xs">Contact</a>

            <button className="bg-black text-white px-4 py-2  rounded-md hover:bg-gray-800 w-28 text-xs">
              Let’s Discuss
            </button>
          </div>
        )}

      </div>
    </nav>
  );
}
