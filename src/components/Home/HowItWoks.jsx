import { FaTruck, FaShoppingBag, FaSmile } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow-xl rounded-xl">
            <FaShoppingBag className="text-4xl mx-auto text-accent mb-4" />
            <h3 className="font-semibold text-xl mb-2">Choose Products</h3>
            <p className="text-gray-600">Browse our beauty collection</p>
          </div>

          <div className="p-6 shadow-xl rounded-xl">
            <FaTruck className="text-4xl mx-auto text-accent mb-4" />
            <h3 className="font-semibold text-xl mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Delivered to your doorstep</p>
          </div>

          <div className="p-6 shadow-xl rounded-xl">
            <FaSmile className="text-4xl mx-auto text-accent mb-4" />
            <h3 className="font-semibold text-xl mb-2">Enjoy Beauty</h3>
            <p className="text-gray-600">Feel confident every day</p>
          </div>
        </div>
      </div>
    </div>
  );
}
