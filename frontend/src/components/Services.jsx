import {
  Monitor,
  Code,
  PenTool,
  BarChart,
  Image as ImageIcon,
} from "lucide-react";

const services = [
  {
    title: "UI DESIGN",
    desc: "User-centric interfaces for digital platform",
    icon: Monitor,
  },
  {
    title: "WEBSITE BUILDING",
    desc: "Responsive, functional websites",
    icon: Code,
  },
  {
    title: "GRAPHIC DESIGN",
    desc: "Visual that speak for your brand.",
    icon: PenTool,
  },
  {
    title: "DATA ANALYST",
    desc: "Insights from your data",
    icon: BarChart,
  },
  {
    title: "POSTER DESIGN",
    desc: "Eye-catching print material",
    icon: ImageIcon,
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">OUR SERVICES</h2>
        <p className="text-gray-600 mt-1">What We Provide</p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <item.icon className="w-12 h-12 mx-auto mb-6" />

            <h3 className="font-bold text-lg mb-2">{item.title}</h3>

            <p className="text-gray-600 mb-6 text-sm">{item.desc}</p>

            <button className="bg-green-400 text-white px-4 py-2 rounded-md text-sm">
              Know More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
