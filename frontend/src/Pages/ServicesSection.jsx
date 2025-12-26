import React from "react";

export default function ServicesSection() {


const centerX = 620;   // center of 1440px
const centerY = 520;
const radius = 280;

// angles for life-cycle (clockwise)
const positions = [
  { angle: -90 },  // UI Design (top)
  { angle: 0 },    // Website building (right)
  { angle: 135 },  // Data Analyst (bottom-right)
  { angle: 90 },   // Poster Design (bottom)
  { angle: 180 },  // Graphic Design (left)
];
  return (
    <div className="w-full bg-white py-20">
      {/* FIXED CANVAS */}
      <div className="relative w-[1440px] h-[900px] mx-auto">

        {/* HEADING */}
        <h1 className="text-[44px] font-bold leading-tight text-gray-900">
          Innovative solutions to <br />
          <span className="text-[#6FCF97]">energise</span> your business.
        </h1>

        <p className="mt-4 w-[520px] text-[16px] text-gray-600 leading-6">
          Unlock your business’s full potential with innovative design
          solutions focused on efficiency, modern UI, and growth. Stay
          ahead of the competition with technology that truly drives
          success.
        </p>

        {/* DOTTED CIRCLE */}
        <div className="absolute top-[260px] left-[400px] w-[820px] h-[820px] border border-dashed border-gray-400 rounded-full" />


        {/* UI DESIGN */}
{(() => {
  const rad = (positions[0].angle * Math.PI) / 180;
  return (
    <div
      className="absolute w-[380px] bg-white rounded-xl border p-6 shadow-sm"
      style={{
        left: centerX + radius * Math.cos(rad) - 360,
        top: centerY + radius * Math.sin(rad) -30,
      }}
    >
      <h3 className="font-semibold text-[18px] mb-2">UI Design</h3>
      <p className="text-sm text-gray-600 mb-3">
        We Create Intuitive And Visually Appealing User Interface That
        Enhance User Experience And Engagement
      </p>
      <ul className="text-sm space-y-1">
        <li className="text-green-500">● <span className="text-black">User Research & Prototyping</span></li>
        <li className="text-green-500">● <span className="text-black">Wireframing & Mockups</span></li>
        <li className="text-green-500">● <span className="text-black">Interaction Design</span></li>
      </ul>
    </div>
  );
})()}

{/* WEBSITE BUILDING */}
{(() => {
  const rad = (positions[1].angle * Math.PI) / 180;
  return (
    <div
      className="absolute w-[380px] bg-white rounded-xl border p-6 shadow-sm"
      style={{
        left: centerX + radius * Math.cos(rad) -80,
        top: centerY + radius * Math.sin(rad) - 310,
      }}
    >
      <h3 className="font-semibold text-[18px] mb-2">Website building</h3>
      <p className="text-sm text-gray-600 mb-3">
        From Simple Landing Pages To Complex Website, We Build
        Responsive And Functional Website
      </p>
      <ul className="text-sm space-y-1">
        <li className="text-green-500">● <span className="text-black">Front-end Development</span></li>
        <li className="text-green-500">● <span className="text-black">Back-End Development</span></li>
      </ul>
    </div>
  );
})()}

{/* DATA ANALYST */}
{(() => {
  const rad = (positions[2].angle * Math.PI) / 180;
  return (
    <div
      className="absolute w-[380px] bg-white rounded-xl border p-6 shadow-sm"
      style={{
        left: centerX + radius * Math.cos(rad) +400,
        top: centerY + radius * Math.sin(rad) -170,
      }}
    >
      <h3 className="font-semibold text-[18px] mb-2">Data Analyst</h3>
      <p className="text-sm text-gray-600 mb-3">
        We Transform Complex Datasets Into Clear, Actionable Insights
        Don’t Just Collect Numbers, Understand What They Mean For
        Your Future Growth And Strategy
      </p>
      <ul className="text-sm space-y-1">
        <li className="text-green-500">● <span className="text-black">Performance Reporting And Dashboards</span></li>
        <li className="text-green-500">● <span className="text-black">User Behavior Analysis</span></li>
      </ul>
    </div>
  );
})()}

{/* POSTER DESIGN */}
{(() => {
  const rad = (positions[3].angle * Math.PI) / 180;
  return (
    <div
      className="absolute w-[420px] bg-white rounded-xl border p-6 shadow-sm"
      style={{
        left: centerX + radius * Math.cos(rad) -100,
        top: centerY + radius * Math.sin(rad) +90,
      }}
    >
      <h3 className="font-semibold text-[18px] mb-2">Poster Design</h3>
      <p className="text-sm text-gray-600 mb-3">
        Our Visuals Instantly Grab Attention With Striking Designs And
        Captivating Feeds, Ensuring Your Message Leaves A Lasting
        Impression.
      </p>
      <ul className="text-sm space-y-1">
        <li className="text-green-500">● <span className="text-black">Event & Promotional Poster</span></li>
        <li className="text-green-500">● <span className="text-black">Large Format Print-Ready Files</span></li>
      </ul>
    </div>
  );
})()}

{/* GRAPHIC DESIGN */}
{(() => {
  const rad = (positions[4].angle * Math.PI) / 180;
  return (
    <div
      className="absolute w-[380px] bg-white rounded-xl border p-6 shadow-sm"
      style={{
        left: centerX + radius * Math.cos(rad) - 85,
        top: centerY + radius * Math.sin(rad) +40,
      }}
    >
      <h3 className="font-semibold text-[18px] mb-2">Graphic Design</h3>
      <p className="text-sm text-gray-600 mb-3">
        From Branding To Marketing Assets, We Create Visual Identities
        That Resonate
      </p>
      <ul className="text-sm space-y-1">
        <li className="text-green-500">● <span className="text-black">Brand Identity & Logos</span></li>
        <li className="text-green-500">● <span className="text-black">Packaging Design</span></li>
        <li className="text-green-500">● <span className="text-black">Marketing & Advertising Design</span></li>
      </ul>
    </div>
  );
})()}

       

      </div>
    </div>
  );
}
