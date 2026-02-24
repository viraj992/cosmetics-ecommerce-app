export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-pink-50 to-white flex items-center">
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-6 lg:px-8">


        {/* ================= LEFT CONTENT ================= */}
        <div className="py-14 md:py-0 text-center md:text-left">

          {/* Eyebrow text */}
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-accent bg-pink-100 rounded-full">
            Premium Beauty Collection
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            Discover Your <br />
            <span className="text-accent">Natural Beauty</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-10 max-w-md mx-auto md:mx-0">
            Premium cosmetics crafted with care to enhance your confidence,
            comfort, and natural glow — made for everyday elegance.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-5">
            <button className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-pink-500 transition shadow-lg">
              Shop Now
            </button>

            <button className="px-8 py-3 border-2 border-gray-300 text-gray-800 rounded-lg hover:border-accent hover:text-accent transition">
              View Collection
            </button>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative flex justify-center items-center mt-12 md:mt-0">

          {/* Decorative background circle */}
          <div className="absolute w-72 h-72 md:w-[420px] md:h-[420px] bg-pink-100 rounded-full -z-10"></div>

          {/* Main Image */}
          <img
            src="/home2.png"
            className="w-72 sm:w-96 md:w-[500px] lg:w-[550px] object-contain"
            alt="Cosmetics"
          />

          {/* Floating Badge */}
          <div className="absolute bottom-6 right-6 md:bottom-[40px] md:right-[120px] bg-white px-5 py-3 rounded-xl shadow-xl">
            <p className="font-semibold text-sm">100% Cruelty Free</p>
            <p className="text-xs text-gray-500">Safe & Ethical Beauty</p>
          </div>
        </div>

      </div>
    </section>
  );
}
