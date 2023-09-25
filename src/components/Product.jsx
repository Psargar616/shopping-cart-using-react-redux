import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed to Cart");
  };
  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-xl gap-3 p-4 mt-10 ml-5 ">
      <div>
        <p className="text-green-700 font-semibold text-lg truncate w-40 ">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px] object-cover">
        <img src={post.image} className="w-full h-full" />
      </div>
      {/* price and btn */}
      <div className="flex justify-between items-center gap-12">
        <div>
          <p className="text-green-600 font-semibold ">${post.price}</p>
        </div>

        {cart.some((p) => p.id == post.id) ? (
          <button  className=" text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 hover:text-white hover:bg-gray-700 transition duration-300 ease-in"
           onClick={removeFromCart}
        >
            <p>Remove Item</p>
          </button>
        ) : (
          <button
           className=" text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 hover:text-white hover:bg-gray-700 transition duration-300 ease-in" 
           onClick={addToCart}>
            <p>Add to Cart</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
