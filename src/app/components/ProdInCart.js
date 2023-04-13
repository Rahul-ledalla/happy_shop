import React from "react";
import "../styles/prodInCart.css";
import {
  incrementQuantity,
  decrementQuantity,
} from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const ProdInCart = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrement = (product) => {
    dispatch(incrementQuantity(product.id));
  };
  const handleDecrement = (product) => {
    dispatch(decrementQuantity(product.id));
  };
  return (
    <div className="main-container">
      <div className="inner-cartprod">
        <div className="blk-1">
          <img src={product.image} />
          <div className="blk-1-btn">
            <button onClick={() => handleIncrement(product)}>+</button>
            <span>{product.quantity}</span>
            <button onClick={() => handleDecrement(product)}>-</button>
          </div>
        </div>
        <div className="blk-2">
          <p>{product.name.substring(0, 25) + "..."}</p>
        </div>
        <div className="blk-3">₹ {+product.quantity * +product.price}</div>
      </div>
    </div>
  );
};

export default ProdInCart;
