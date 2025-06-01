import { useDispatch } from "react-redux";
import {remove} from "../../../store/cart/cartSlice"
import "./CartCard.css";

export const CartCard = ({product}) => {
  const {pname, price, image,quantity} = product;
  const dispatch = useDispatch();
  return (
      <div className="cartCard">
        <img src={image} alt={pname} />
        <h1 className="font-bold">Item Name:</h1>
        <p className="productName">{pname}</p>
        <h1 className="font-bold">Price:</h1>
        <p className="productPrice">₹{price}</p>
        <h1 className="font-bold">Quantity :</h1>
        <p className="">{quantity} kg</p>
        <button onClick={()=>dispatch(remove(product))} >Remove</button>
      </div>
  )
}