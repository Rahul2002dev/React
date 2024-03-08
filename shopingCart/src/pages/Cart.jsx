import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="flex flex-col m-5 justify-center items-center">
  {
    cart.length > 0  ? 
    (<div className="flex flex-row">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-row justify-between fixed right-0">

        <div className="flex">
          <div className="bold">Your Cart</div>
          <div className="ml-4">Summary</div>
          <p className="ml-4">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="font-bold">Total Amount: ${totalAmount}</p>
          <button className="bg-blue-400 text-white px-4 py-2 rounded-md">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
