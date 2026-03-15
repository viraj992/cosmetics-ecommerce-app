import { useState } from "react"
import {addToCart, getCart, getTotal} from "../../utils/cart"
import { TbTrash } from "react-icons/tb"
import { useNavigate } from "react-router-dom";

export default function CartPage(){
    const [cart, setCart] = useState(getCart());
    const navigate = useNavigate();
    return(
        <div className="w-[100vw] max-w-[100vw] h-screen flex flex-col items-center py-[40px] px-[10px]">
            {
cart.map((item)=>{

return(

<div key={item.productId}>

{/* DESKTOP VIEW (UNCHANGED) */}
<div className="hidden md:flex w-full md:w-[800px] md:h-[100px] m-[10px] shadow-2xl flex-row items-center relative">
    
    <img src={item.image} className="w-[100px] h-[100px] object-cover"/>

    <div className="w-[320px] h-full flex flex-col justify-center pl-[10px]">
        <span className="font-bold text-left">{item.name}</span>
        <span className="font-semibold">
            {item.price.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}
        </span>
    </div>

    <div className="w-[190px] h-full flex flex-row justify-center items-center">
        <button className="flex justify-center items-center w-[30px] rounded-lg bg-accent text-white cursor-pointer hover:bg-white border-accent border-[1px] hover:text-accent"
        onClick={()=>{
            addToCart(item,-1);
            setCart(getCart());
        }}>
        -
        </button>

        <span className="mx-[10px]">{item.quantity}</span>

        <button className="flex justify-center items-center w-[30px] rounded-lg bg-accent text-white cursor-pointer hover:bg-white border-accent border-[1px] hover:text-accent"
        onClick={()=>{
            addToCart(item,1);
            setCart(getCart());
        }}>
        +
        </button>
    </div>

    <div className="w-[190px] h-full flex justify-end items-center pr-[10px]">
        <span className="font-semibold">
            {(item.quantity * item.price).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}
        </span>
    </div>

    <button
    className="w-[30px] h-[30px] absolute right-[-40px] cursor-pointer bg-red-700 shadow rounded-full flex justify-center items-center text-white border-red-700 border-[2px] hover:bg-white hover:text-red-700"
    onClick={()=>{
        addToCart(item,-item.quantity);
        setCart(getCart());
    }}>
        <TbTrash className="text-xl"/>
    </button>

</div>


{/* MOBILE VIEW */}
<div className="md:hidden w-full bg-white shadow-xl rounded-lg p-3 my-3">

    <div className="flex">

        <img src={item.image} className="w-[80px] h-[80px] object-cover rounded"/>

        <div className="flex flex-col flex-1 ml-3">

            <span className="font-bold text-sm">{item.name}</span>

            <span className="text-sm font-semibold">
                {item.price.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}
            </span>

            <span className="text-sm mt-1">
                Total: {(item.quantity * item.price).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}
            </span>

        </div>

        <button
        className="w-[30px] h-[30px] bg-red-600 text-white rounded-full flex justify-center items-center"
        onClick={()=>{
            addToCart(item,-item.quantity);
            setCart(getCart());
        }}>
            <TbTrash/>
        </button>

    </div>

    <div className="flex justify-center items-center mt-3">

        <button
        className="w-[30px] h-[30px] rounded bg-accent text-white"
        onClick={()=>{
            addToCart(item,-1);
            setCart(getCart());
        }}>
        -
        </button>

        <span className="mx-4 font-semibold">{item.quantity}</span>

        <button
        className="w-[30px] h-[30px] rounded bg-accent text-white"
        onClick={()=>{
            addToCart(item,1);
            setCart(getCart());
        }}>
        +
        </button>

    </div>

</div>

</div>

)
})
}
            {/* DESKTOP TOTAL SECTION (UNCHANGED) */}
<div className="hidden md:flex md:w-[800px] w-full h-[100px] m-[10px] p-[10px] shadow-2xl flex-row items-center justify-end relative">
    <span className="font-bold text-2xl">
        Total: {getTotal().toLocaleString("en-us", { minimumFractionDigits:2, maximumFractionDigits:2})}
    </span>

    <button
    className="absolute left-[10px] w-[200px] md:w-[150px] h-[50px] cursor-pointer rounded-lg shadow-2xl bg-accent border-[2px] border-accent text-white hover:bg-white hover:text-accent"
    onClick={()=>{
        navigate("/checkout", { state: {items: cart}});
    }}>
        Checkout
    </button>
</div>


{/* MOBILE TOTAL SECTION */}
<div className="md:hidden w-full bg-white shadow-xl rounded-lg p-4 mt-4 flex flex-col items-center gap-3">

    <span className="font-bold text-xl">
        Total: {getTotal().toLocaleString("en-us", { minimumFractionDigits:2, maximumFractionDigits:2})}
    </span>

    <button
    className="w-full h-[45px] cursor-pointer rounded-lg shadow-lg bg-accent border-[2px] border-accent text-white hover:bg-white hover:text-accent"
    onClick={()=>{
        navigate("/checkout", { state: {items: cart}});
    }}>
        Checkout
    </button>

</div>
        </div>
    )
}