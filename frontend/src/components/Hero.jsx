import React from "react";
import logo from "../../public/images/logo.png";
import star from "../../public/images/star.svg";
import bolt from "../../public/images/bolt.svg";
const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Top Section */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-6xl md:text-6xl font-bold leading-tight">
            UNLEASH YOUR <br /> CREATIVE IDEA.
          </h1>

          <p className="mt-4 text-gray-600 font-medium text-2xl">
            Fast, High Quality Design & <br /> Development
          </p>

          <button className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-3 rounded-lg transition">
            GET STARTED
          </button>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full -z-10 scale-110"></div>
            <img src={logo} alt="Illustration" className="h-72 md:h-96" />
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-16">
        {/* Card 1 */}
        <div className="border rounded-2xl p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img className="h-8" src={bolt} alt="" />
            <h3 className="font-bold text-xl">QUICK DELIVERY</h3>
          </div>
          <p className="text-gray-600 pl-10">
            Rapid turnaround times for your projects.
          </p>
          <button className="mt-2 ml-10 w-fit border px-4 py-1 rounded-md text-sm font-medium">
            LEARN MORE
          </button>
        </div>

        {/* Card 2 */}
        <div className="border rounded-2xl p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img className="h-8" src={star} alt="" />
            <h3 className="font-bold text-xl">QUALITY RESULT</h3>
          </div>
          <p className="pl-10 text-gray-600">Professional standards guaranteed.</p>
          <button className="mt-2 ml-10 w-fit border px-4 py-1 rounded-md text-sm font-medium">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
