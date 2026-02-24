import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import ProductPage from "./productsPage";
import ProductOverViewPage from "./productOverView";
import CartPage from "./cart";
import CheckOutpage from "./checkoutPage";
import ContactUsPage from "../contactUsPage";
import ReviewsPage from "../reviewsPage";
import HomePage from "../homePage";
import AboutusPage from "../aboutUs";
import TestPage from "../testPage";
import Footer from "../../components/Home/Footer";

export default function ClientwebPage(){
    return(
        <div className="w-full h-screen max-h-screen ">
            <Header/>

            <div className="w-full pt-[100px]">
                <Routes path="/">
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/products" element={<ProductPage/>}/>
                    <Route path="/reviews" element={<ReviewsPage/>}/>
                    <Route path="/about-us" element={<AboutusPage/>}/>
                    <Route path="/contact-us" element={<ContactUsPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/checkout" element={<CheckOutpage/>}/>
                    <Route path="/test" element={<TestPage/>}/>
                    <Route path="/overview/:productId" element={<ProductOverViewPage/>}/>
                    <Route path="/*" element={<h1 className="text-3xl text-center">404 Not Found</h1>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}