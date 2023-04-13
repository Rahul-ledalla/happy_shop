import React, { useState, useEffect } from "react";
import ProdInCart from "./ProdInCart";
import { useSelector } from "react-redux";
import "../styles/cartSection.css";
import { toggleShowCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartSection = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let arrOfTotal = cart.map((product) => product.quantity * product.price);
    let total = arrOfTotal?.reduce((acc, cur) => acc + cur, 0);
    setCartTotal(total);
  }, [cart]);

  // Handlers
  const handleToggleShowCart = () => {
    dispatch(toggleShowCart());
  };
  return (
    <div className="cart-outer">
      <div className="cart-inner">
        <div style={{ height: "10%" }}>
          <h3>Cart</h3>
        </div>
        <div className="cart-products">
          {cart.map((product) => {
            return <ProdInCart key={product.id} product={product} />;
          })}
        </div>
        <div className="cart-bottom">
          <p>
            Total : <span id="cart-total">₹ {cartTotal}</span>
          </p>
          <button onClick={handleToggleShowCart} className="btn btn-cancel">
            Cancel
          </button>
          <button className="btn btn-checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
