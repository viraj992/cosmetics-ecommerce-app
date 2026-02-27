import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactUsPage() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row p-5 md:p-10 gap-8 justify-center items-start bg-[url(./contact.jpg)] bg-cover bg-center relative">
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Left part */}
      <div className="relative z-10 w-full md:w-[40%] mt-24 flex flex-col gap-8 bg-black/20 backdrop-blur-md rounded-2xl p-8">
        
        {/* Call Us */}
        <div className="flex flex-col">
          <div className="text-2xl md:text-3xl text-white font-bold flex items-center gap-4">
            <FaPhoneAlt /> Call Us
          </div>
          <div className="mt-2 text-white text-sm md:text-base">+9476 2345 234 | 011 233 3434</div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <div className="text-2xl md:text-3xl text-white font-bold flex items-center gap-4">
            <FaEnvelope /> Email
          </div>
          <div className="mt-2 text-white text-sm md:text-base">beautycosmetics99@gmail.com</div>
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <div className="text-2xl md:text-3xl text-white font-bold flex items-center gap-4">
            <FaMapMarkerAlt /> Location
          </div>
          <div className="mt-2 text-white text-sm md:text-base">No: 8/2A, Pepiliyana Mawatha, Nugegoda</div>
        </div>
      </div>

      {/* Right part - Contact Form */}
      <div className="relative z-10 w-full md:w-[45%] bg-[#f5f1ee] rounded-2xl flex flex-col items-center p-8 gap-6 shadow-xl">
        <div className="text-secondary font-bold text-3xl md:text-4xl">Contact Us</div>

        {/* Input fields */}
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full md:w-[450px] h-[55px] px-5 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent outline-none transition-all duration-300"
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-[450px] h-[55px] px-5 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent outline-none transition-all duration-300"
        />

        <textarea
          placeholder="Enter your message"
          rows={5}
          className="w-full md:w-[450px] px-5 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent outline-none transition-all duration-300 resize-none"
        />

        {/* Submit button */}
        <button className="w-full md:w-[450px] h-[60px] bg-accent text-white rounded-xl text-lg font-semibold mt-2 hover:bg-white hover:text-accent border border-accent transition-all duration-300 cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  );
}
