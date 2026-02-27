import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import uploadFile from "../../utils/mediaUpload";

export default function AddProductPage() {
	const [productId, setProductId] = useState("");
	const [productName, setProductName] = useState("");
	const [alternativeNames, setAlternativeNames] = useState("");
	const [labelledPrice, setLabelledPrice] = useState("");
	const [price, setPrice] = useState("");
	const [images, setImages] = useState([]);
	const [description, setDescription] = useState("");
	const [stock, setStock] = useState("");
	const [isAvailable, setIsAvailable] = useState(true);
	const [category, setCategory] = useState("cream");
    const navigate = useNavigate()

    async function  handleSubmit(){

		const promisesArray = []

		for(let i=0; i<images.length; i++){

			const promise = uploadFile(images[i])
			promisesArray[i] = promise

		}

		const responses = await Promise.all(promisesArray)
		console.log(responses)		


        const altNamesInArray = alternativeNames.split(",")
        const productData = {
            productId: productId,
            name: productName,
            altNames: altNamesInArray,
            labelledPrice: labelledPrice,
            price: price,
            images: responses,
            description: description,
            stock: stock,
            isAvailable: isAvailable,
            category: category
        }

        const token = localStorage.getItem("token");

        if(token == null){
            navigate("/login");
            return;
        }

        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/products", productData, 
            {
                headers:{
                    Authorization: "Bearer "+token
                }
            }
        ).then(
            (res)=>{
                console.log("Product added successfully");
                console.log(res.data);
                toast.success("Product added successfully");
                navigate("/admin/products");
            }
        ).catch(
            (error)=>{
                console.error("Error adding product:", error);
                toast.error("Failed to add product");              
            }
        )

        console.log(productData);


    }
	

	return (
  <div className="w-full min-h-screen flex justify-center items-start bg-gray-50">
    <div className="w-[900px] bg-white shadow-2xl rounded-2xl p-10">

      {/* ROW 1 */}
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Product ID</label>
          <input
            type="text"
			placeholder="Cosmxxxx"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="border rounded-lg h-[40px] px-3"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="border rounded-lg h-[40px] px-3"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Alternative Names</label>
          <input
            type="text"
            value={alternativeNames}
            onChange={(e) => setAlternativeNames(e.target.value)}
            className="border rounded-lg h-[40px] px-3"
          />
        </div>
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Labelled Price</label>
          <input
            type="number"
            value={labelledPrice}
            onChange={(e) => setLabelledPrice(e.target.value)}
            className="border rounded-lg h-[40px] px-3"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded-lg h-[40px] px-3"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Stock</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="border rounded-lg h-[40px] px-3"
          />
        </div>
      </div>

      {/* ROW 3 - IMAGES */}
      <div className="mt-6 flex flex-col">
        <label className="text-sm font-semibold mb-1">Images</label>
        <input
          multiple
          type="file"
          onChange={(e) => setImages(e.target.files)}
          className="border rounded-lg h-[45px] px-3 flex items-center"
        />
      </div>

      {/* DESCRIPTION + CATEGORY / AVAILABILITY */}
      <div className="grid grid-cols-[2fr_1fr] gap-6 mt-6">

        {/* LEFT - DESCRIPTION */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-lg h-[160px] px-3 py-2"
          ></textarea>
        </div>

        {/* RIGHT - CATEGORY + AVAILABILITY */}
        <div className="flex flex-col gap-6">

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded-lg h-[40px] px-3"
            >
              <option value="skincare">Skincare</option>
              <option value="makeup">Makeup</option>
              <option value="haircare">Hair Care</option>
              <option value="bodycare">Body Care</option>
              <option value="fragrance">Fragrance</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Availability</label>
            <select
              value={isAvailable}
              onChange={(e) => setIsAvailable(e.target.value === "true")}
              className="border rounded-lg h-[40px] px-3"
            >
              <option value={true}>Available</option>
              <option value={false}>Not Available</option>
            </select>
          </div>

        </div>

      </div>

      {/* BUTTONS */}
      <div className="w-full flex justify-between mt-10">
        <Link
          to={"/admin/products"}
          className="w-[48%] h-[50px] border border-gray-400 rounded-lg flex justify-center items-center font-semibold hover:bg-gray-100 transition"
        >
          Cancel
        </Link>

        <button
          onClick={handleSubmit}
          className="w-[48%] h-[50px] bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer"
        >
          Add Product
        </button>
      </div>

    </div>
  </div>
);




}