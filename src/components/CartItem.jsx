import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed!!!");
  };
  return (
    <div>
      <div className="w-full flex space-x-6 py-6 px-4 items-start border-b-2 border-slate-500">
        <div className=" w-[180px] aspect-square h-[180px] object-cover min-[425px]:items-center">
          <img src={item.image} className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col space-y-4 w-full ">
          <h1 className="text-green-700 font-semibold text-xl w-full ">
            {item.title}
          </h1>
          <h1 className=" text-gray-400 text-md text-left w-full">
            {item.description.split(" ").slice(0, 17).join(" ") + "..."}
          </h1>
          <div className="flex justify-between items-center w-full">
            <p className="text-green-700 font-semibold text-xl">
              ${item.price}
            </p>
            <button
              className="w-10 h-10 rounded-full flex justify-center items-center bg-red-200 hover:bg-red-400"
              onClick={removeFromCart}
            >
              <AiTwotoneDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
