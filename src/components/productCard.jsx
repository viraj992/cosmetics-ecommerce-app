import { useNavigate } from "react-router-dom";
import { addToCart } from "../utils/cart";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  // Function to navigate to product overview
  const goToOverview = () => {
    navigate(`/overview/${product.productId}`);
  };

  return (
    <div
      className="
        w-full h-auto 
        shadow-2xl rounded-2xl overflow-hidden group relative flex flex-col
        md:w-[300px] md:h-[350px]
      "
    >
      {/* IMAGE SECTION */}
      <div
        onClick={goToOverview}
        className="
          relative w-full overflow-hidden
          h-[250px] md:h-[84%]
          cursor-pointer
        "
      >
        <img
          src={product.images[0]}
          className="
            w-full h-full object-cover 
            transition-transform duration-500 
            group-hover:scale-110
          "
        />
      </div>

      {/* NAME SECTION */}
      <div
        onClick={goToOverview}
        className="
          w-full bg-white flex items-center 
          px-4 py-2 
          relative z-20
          md:h-[16%]
          cursor-pointer
        "
      >
        <h2 className="text-accent font-semibold text-lg md:text-xl truncate">
          {product.name}
        </h2>
      </div>

      {/* SLIDE-UP PANEL */}
      <div
        onClick={goToOverview}
        className="
          absolute bottom-0 left-0 
          w-full 
          h-[70%] md:h-[60%]
          bg-black/85 
          translate-y-[100%] group-hover:translate-y-0
          transition-transform duration-500
          p-4 md:p-5 flex flex-col justify-end z-30
          cursor-pointer
        "
      >
        <span className="text-gray-300 text-xs md:text-sm">
          {product.productId}
        </span>

        <h1 className="text-white text-lg md:text-xl font-bold mb-2">
          {product.name}{" "}
          <span className="text-gray-300 text-sm">{product.category}</span>
        </h1>

        {/* Price */}
        {product.labelledPrice > product.price ? (
          <p className="text-white mb-3 text-sm md:text-base">
            <span className="line-through mr-2">
              {product.labelledPrice.toFixed(2)}
            </span>
            <span className="text-accent font-bold">
              {product.price.toFixed(2)}
            </span>
          </p>
        ) : (
          <p className="text-white mb-3 text-sm md:text-base">
            {product.price.toFixed(2)}
          </p>
        )}

        {/* Add to Cart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering parent click
            addToCart(product, 1);
            toast.success("Product added to cart");
          }}
          className="
            w-full h-[40px] md:h-[45px]
            bg-accent text-white rounded-md
            hover:bg-white hover:text-accent border border-accent
            transition duration-300 text-sm md:text-base
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
