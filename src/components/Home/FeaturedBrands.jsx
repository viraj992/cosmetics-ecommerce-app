export default function FeaturedBrands() {
  const brands = ["/b1.png", "/b2.png", "/b3.png", "/b4.png"];

  return (
    <div className="w-full py-16 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-10">
        Featured Brands
      </h2>

      <div className="flex justify-center gap-10 flex-wrap">
        {brands.map((img, i) => (
          <img
            key={i}
            src={img}
            className="h-[60px] grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </div>
  );
}
