import { useEffect, useState } from "react";

export default function WhyTrustUs() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 30;

    const counter = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= target) {
        clearInterval(counter);
      }
    }, 50);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto bg-black rounded-3xl py-12 relative">
        
        {/* Title */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2
        bg-white px-5 py-2 rounded-xl">
          <h2 className="text-green-500 font-bold text-sm sm:text-base">
            WHY TRUST US
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center
        text-white gap-10">

          {/* Animated Counter */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-green-400">
              {count}+
            </h3>
            <p className="text-sm text-gray-300">
              Delivered on time
            </p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-green-400">
              100%
            </h3>
            <p className="text-sm text-gray-300">
              Client feedback
            </p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-green-400">
              24/7
            </h3>
            <p className="text-sm text-gray-300">
              Always for you
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
