import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiPlus, BiTrash, BiEdit } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/loader";

export default function ProductsAdminPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    // Load products
    useEffect(() => {
        if (isLoading) {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products")
                .then((res) => {
                    setProducts(res.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.error("Failed to load products:", err);
                    toast.error("Failed to load products");
                    setIsLoading(false);
                });
        }
    }, [isLoading]);

    if (isLoading) return <Loader />;

    return (
        <div className="w-full min-h-screen p-6 bg-gray-50">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Products Management</h1>

            <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
                <table className="w-full min-w-[800px] border-collapse">
                    <thead className="bg-gray-100 text-left text-gray-700 uppercase text-sm">
                        <tr>
                            <th className="p-3 border-b">Image</th>
                            <th className="p-3 border-b">Product ID</th>
                            <th className="p-3 border-b">Name</th>
                            <th className="p-3 border-b">Price</th>
                            <th className="p-3 border-b">Labelled Price</th>
                            <th className="p-3 border-b">Category</th>
                            <th className="p-3 border-b">Stock</th>
                            <th className="p-3 border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr
                                key={index}
                                className={`hover:bg-gray-50 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                            >
                                <td className="p-3 border-b">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-12 h-12 rounded-lg object-cover"
                                    />
                                </td>
                                <td className="p-3 border-b">{product.productId}</td>
                                <td className="p-3 border-b">{product.name}</td>
                                <td className="p-3 border-b">Rs. {product.price.toLocaleString()}</td>
                                <td className="p-3 border-b">Rs. {product.labelledPrice.toLocaleString()}</td>
                                <td className="p-3 border-b">{product.category}</td>
                                <td className="p-3 border-b">{product.stock}</td>
                                <td className="p-3 border-b flex justify-center items-center gap-2">
  {/* Delete Button */}
  <button
    onClick={() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
      axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/products/${product.productId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
        .then(() => {
          toast.success("Product deleted successfully");
          setIsLoading(!isLoading);
        })
        .catch((err) => {
          console.error("Error deleting product:", err);
          toast.error("Failed to delete product");
        });
    }}
    className="flex justify-center items-center bg-red-500 hover:bg-red-600 text-white p-4 m-1 rounded-full shadow-md transition-all"
  >
    <BiTrash className="text-xl" />
  </button>

  {/* Edit Button */}
  <button
    onClick={() => navigate("/admin/updateProduct", { state: product })}
    className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-md transition-all"
  >
    <BiEdit className="text-xl" />
  </button>
</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Product Floating Button */}
            <Link
                to={"/admin/newProduct"}
                className="fixed right-8 bottom-8 p-6 text-white bg-black rounded-full shadow-2xl hover:scale-110 hover:bg-gray-800 transition-transform duration-300"
            >
                <BiPlus className="text-4xl" />
            </Link>
        </div>
    );
}
