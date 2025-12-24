import { useEffect, useState } from "react";

export default function WhyTrustUs() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let current = 1;
    let speed = 100;

    const counter = setInterval(() => {
      current += 1;
      setCount(current);

      speed -= 5; // speed increase
      if (current >= 30) {
        clearInterval(counter);
        setCount(30);
      }
    }, speed);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto bg-black rounded-3xl py-10 relative">
        {/* Title */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-xl">
          <h2 className="text-green-500 font-bold">WHY TRUST US</h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center text-white gap-8">
          {/* Animated */}
          <div>
            <h3 className="text-3xl font-bold text-green-400">
              {count}+
            </h3>
            <p className="text-sm">Delivered on time</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-green-400">
              100%
            </h3>
            <p className="text-sm">Client feedback</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-green-400">
              24/7
            </h3>
            <p className="text-sm">Always for you</p>
          </div>
        </div>
      </div>
    </section>
  );
}
