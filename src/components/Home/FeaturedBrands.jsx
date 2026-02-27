
export default function FeaturedBrands() {
  const brands = ["/Avene.png", "/cantu.png", "/Cetaphil.png", "/Ego-QV.png", "/CeraVe-Baby.png", "/NIVEA.png", "old-spice.png", "/Aptamil-logo.png"];
  
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
            className="h-[60px] transition"
          />
        ))}
      </div>
    </div>
  );
}
