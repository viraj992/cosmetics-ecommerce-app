export default function OurProducts() {
  const products = [1, 2, 3, 4];

  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-10">
        <h2 className="text-3xl font-bold mb-10">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((_, i) => (
            <div
              key={i}
              className="shadow-xl rounded-xl p-4 hover:shadow-2xl transition"
            >
              <img
                src="/p1.jpg"
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <h3 className="mt-3 font-semibold">Beauty Product</h3>
              <p className="text-gray-600">Rs. 2,500</p>
              <button className="mt-3 w-full bg-accent text-white py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
