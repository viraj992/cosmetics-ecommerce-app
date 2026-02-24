import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { FaBoxArchive, FaEye } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { IoPeople, IoSettings } from "react-icons/io5";
import ProductsAdminPage from "./admin/productsAdminPage";
import AddProductPage from "./admin/addProductAdminPage";
import UpdateProductPage from "./admin/updateProduct";
import OrdersPageAdmin from "./admin/ordersPageAdmin";
import { useEffect, useState } from "react";
import Loader from "../components/loader";
import toast from "react-hot-toast";
import axios from "axios";
import ReviewsAdminPage from "./admin/reviewsAdminPage";
import { FaStar } from "react-icons/fa";
import UsersManagePage from "./admin/usersManagePage";
import AdminDashboard from "./admin/adminDashboard";
import { MdDashboard } from "react-icons/md";

export default function AdminPage() {
  const navigate = useNavigate();
  const [adminValidated, setAdminValidated] = useState(false);
  useEffect(
      ()=>{
        const token = localStorage.getItem("token");
        if(token == null){
          toast.error("You are not logged in");
          navigate("/login");
        }
        else{
          axios.get(import.meta.env.VITE_BACKEND_URL+"/api/users/", {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          }).then((response) => {
              if (response.data.role == "admin") {
                  setAdminValidated(true);
              } else {
                  toast.error("You are not authorized");
                  navigate("/login");
              }
          }).catch(() => {
              toast.error("You are not authorized");
              navigate("/login");
          });
      }
      }
  ,[]);

  return (
    <div className="w-full h-screen flex">
      {adminValidated?<>
      {/* Sidebar */}
      <div className="w-[300px] h-full flex flex-col items-center">
        <span className="text-2xl font-bold my-5">Admin Panel</span>

        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `flex flex-row h-[60px] w-full p-[20px] pl-[60px] items-center text-xl gap-[25px] ${
              isActive ? "bg-accent text-white" : ""
            }`
          }
        >
          <MdDashboard /> Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            `flex flex-row h-[60px] w-full p-[20px] pl-[60px] items-center text-xl gap-[25px] ${
              isActive ? "bg-accent text-white" : ""
            }`
          }
        >
          <FaBoxArchive /> Products
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            `flex flex-row h-[60px] w-full p-[20px] pl-[60px] items-center text-xl gap-[25px] ${
              isActive ? "bg-accent text-white" : ""
            }`
          }
        >
          <GiShoppingBag /> Orders
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `flex flex-row h-[60px] w-full p-[20px] pl-[60px] items-center text-xl gap-[25px] ${
              isActive ? "bg-accent text-white" : ""
            }`
          }
        >
          <IoPeople /> Users
        </NavLink>

        <NavLink
          to="/admin/adminReviews"
          className={({ isActive }) =>
            `flex flex-row h-[60px] w-full p-[20px] pl-[60px] items-center text-xl gap-[25px] ${
              isActive ? "bg-accent text-white" : ""
            }`
          }
        >
          <FaStar /> Reviews
        </NavLink>

        {/* <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `flex flex-row h-[60px] w-full p-[20px] pl-[60px] items-center text-xl gap-[25px] ${
              isActive ? "bg-accent text-white" : ""
            }`
          }
        >
          <IoSettings /> Settings
        </NavLink> */}

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-row h-[60px] w-full p-[20px] pl-[60px] items-center text-xl gap-[25px] ${
              isActive ? "bg-accent text-white" : ""
            }`
          }
        >
          <FaEye /> User View
        </NavLink>
      </div>

      {/* Content */}
      <div className="w-[calc(100%-300px)] h-full mt-[20px]">
        <Routes>
          <Route path="/dashboard" element={<AdminDashboard/>} />

          <Route path="/products" element={<ProductsAdminPage />} />
          <Route path="/newProduct" element={<AddProductPage />} />
          <Route path="/orders" element={<OrdersPageAdmin />} />
          <Route path="/updateProduct" element={<UpdateProductPage />} />
          <Route path="/adminReviews" element={<ReviewsAdminPage/>}/>
          <Route path="/users" element={<UsersManagePage/>}/>
        </Routes>
      </div>
    </> : <Loader/>}
    </div>
  );
}
