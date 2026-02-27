import { useEffect, useState } from "react"
import Loader from "../../components/loader";
import axios from "axios";
import ProductCard from "../../components/productCard";
import { BiSearch } from "react-icons/bi";

export default function ProductPage(){
    const [prodcuts,setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState("");

    useEffect(() => {
		if (loading) {
			if (query == "") {
				axios
					.get(import.meta.env.VITE_BACKEND_URL + "/api/products")
					.then((res) => {
						setProducts(res.data);
						setLoading(false);
					});
			} else {
				axios
					.get(import.meta.env.VITE_BACKEND_URL + "/api/products/search/"+query)
					.then((res) => {
						setProducts(res.data);
						setLoading(false);
					});
			}
		}
	}, [loading]);

    return(
        <div className="w-full h-full ">
            <div className="w-full h-[100px] flex justify-center items-center relative ">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setLoading(true);
                    }}
                    className="w-[400px] h-[40px] bg-gray-100 border border-gray-200 rounded-lg p-2"
                    
                />
                <div className="absolute ml-[360px] bg-accent h-[40px] w-[40px] rounded-lg flex justify-center items-center">
                <BiSearch className="  text-2xl  text-white"/></div>
            </div>
            {
                loading ? <Loader/> : 
                <div className="w-full flex flex-wrap gap-[40px] justify-center items-center p-[20px]">
                    {
                        prodcuts.map((product)=>{
                            return(
                                <ProductCard key={product.productId} product={product} />
                                                                     // relevent product all details
                                
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}