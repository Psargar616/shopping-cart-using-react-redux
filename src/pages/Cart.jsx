import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  // accessing items in cart using state
  const { cart } = useSelector((state) => state);
  console.log("cart items :", cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div>
      {cart.length > 0 ? (
        <div className="p-2 max-w-6xl mx-auto space-y-6 min-h-[80vh] flex space-x-12 justify-start ">
          <div className="w-[60%] flex space-y-6 flex-col ">
            {cart.map((item, index) => {
              return <CartItem item={item} key={item.id} itemIndex={index} />;
            })}
          </div>
          <div className="flex justify-between flex-col h-[80vh] w-[30%] min-[425px]:items-center ">
            <div className="flex flex-col space-y-2">
              <div>
                <div className="text-xl text-green-700 font-bold uppercase">
                  Your Cart
                </div>
                <div className="text-5xl text-green-700 font-bold uppercase ">
                  Summery
                </div>
              </div>

              <p className="mt-4 min-[425px]:items-center">
                <span className="text-lg text-slate-700 font-bold ">
                  Total Items : {cart.length}
                </span>
              </p>
            </div>
            <div>
              <p className="text-lg text-slate-700 font-bold mb-4">
                Total Amount : ${totalAmount}
              </p>
              <button className=" text-white  bg-green-700 rounded-md border-2 border-green-700 font-semibold text-lg p-2 px-10 uppercase cursor-pointer hover:text-white hover:bg-opacity-90 shadow-[12px_10px_10px_0px_#00000024] transition duration-300 ease-in w-full ">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center min-h-[80vh]">
          <h1 className="text-3xl uppercase font-bold text-green-700">
            Cart Empty
          </h1>
          <Link to="/">
            <button className=" text-white  bg-green-700 rounded-md border-2 border-green-700 font-semibold text-lg p-2 px-10 uppercase cursor-pointer hover:text-white hover:bg-opacity-90 shadow-[12px_10px_10px_0px_#00000024] transition duration-300 ease-in hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] ">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
