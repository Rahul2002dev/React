
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex  p-3">

      <div className="flex w-[700px] h-[350px] border border-blue-500 border-t-4 p-6">

        <div className="w-[400px] h-[300px] mr-10">
          <img src={item.image} className="w-full h-full"/>
        </div>
        <div>
        {/* post.description.split(" ").slice(0,10).join(" ") + "..." */}
          <h1 className="font-bold text-black mb-4">{item.title}</h1>
          <h1 className="mb-20">{item.description.split(" ").slice(0,10).join(" ")+"..."}</h1>
          <div className="flex flex-row justify-between">
          
                <p className="text-green-600 font-semibold">{item.price}</p>

            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
