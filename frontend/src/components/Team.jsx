import { Linkedin, Github } from "lucide-react";

const team = [
  {
    name: "MD YOUSUF",
    role: "GRAPHIC DESIGNER",
    img: "/images/yousuf.png",
  },
  {
    name: "MD AMSHAR",
    role: "DATA ANALYST",
    img: "/images/amshar.png",
  },
  {
    name: "ARBAZ AHMAD",
    role: "FULL STACK DEVELOPER",
    img: "/images/arbaz.png",
  },
  {
    name: "MD AASIF",
    role: "FULL STACK DEVELOPER",
    img: "/images/aasif.png",
  },
];

export default function Team() {
  return (
    <section className="py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">MEET THE CREATIVE MINDS</h2>
        <div className="w-24 h-2 bg-green-300 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl p-4 text-center"
          >
            {/* Image */}
            <div className="border rounded-xl p-2 mb-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-xl grayscale"
              />
            </div>

            {/* Name */}
            <h3 className="font-bold text-sm">{item.name}</h3>

            {/* Role */}
            <p className="text-xs text-gray-600 mb-3">{item.role}</p>

            {/* Icons */}
            <div className="flex justify-center gap-4">
              <Linkedin size={18} />
              <Github size={18} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
