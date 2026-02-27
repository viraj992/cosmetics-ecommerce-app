import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/loader";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function OurProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  // Detect screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(4);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  // Fetch products
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= products.length - visibleItems ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? products.length - visibleItems : prev - 1
    );
  };

  // Auto slide
  useEffect(() => {
    if (products.length === 0) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [products, visibleItems]);

  if (loading) return <Loader />;

  return (
    <div className="w-full py-20 relative px-20 sm:px-20 lg:px-30">

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-15 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <BiChevronLeft size={28} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-15 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <BiChevronRight size={28} />
      </button>

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(100 / visibleItems) * currentIndex}%)`,
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{ width: `${100 / visibleItems}%` }}
              className="px-3"
            >
              <div className="h-[220px] rounded-xl overflow-hidden shadow-lg bg-white">
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  className="w-full h-[150px] object-cover"
                />
                <div className="p-3">
                  <h2 className="font-semibold truncate">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-500 truncate">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}