import logo from "../assets/images/logo.png";

export default function Hero() {
  return (
    <>
      <section className="w-full bg-white overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* LEFT */}
            <div>
              <h1 className="gradient-text">UNLEASH YOUR CREATIVE IDEA.</h1>
              <p className="mt-6 max-w-md text-black text-base font-medium sm:text-lg">
                Our efficient and swift design and <br /> development processes
                guarantee
                <br />
                high-quality results.
              </p>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center md:justify-end">
              {/* GREEN GRADIENT CIRCLE */}
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full right-0" />

              {/* IMAGE */}
              <img
                src={logo}
                alt="Hero Illustration"
                className="relative z-10 w-64 sm:w-80 lg:w-196"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center text-center px-4 bg-white">
        <h1 className="head text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-green-700 leading-tight">
          Quick Creative Studio <br /> Empowers Your Vision
        </h1>

        <p className="font-semibold mt-6 sm:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 max-w-3xl">
          Boost your business with our tailored solutions. We optimise<br/>
          operations, enhance your competitive edge and fuel sustainable<br/> growth.
          Partner with Quick Creative to strengthen your market <br/>presence and
          expand globally.
        </p>
        <h2 className="font-medium text-2xl line-clamp-1 mt-25 font-stretch-75%">QuickCreative Presenting our superpowers</h2>
        <p className="font-light text-[13px]">Using the term ‘services’ feels a bit old-fashioned, doesn’t it?</p>
      </section>
    </>
  );
}
