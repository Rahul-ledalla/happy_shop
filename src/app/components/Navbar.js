import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import "../styles/navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowCart } from "../../features/cart/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const showCart = useSelector((state) => state.cart.showCart);
  const handleShowCart = () => {
    dispatch(toggleShowCart());
  };
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-blk">
          <h2>🙂 Happy Stores</h2>
        </div>
        <div onClick={handleShowCart} className="cart-blk">
          <FiShoppingCart className="cart-icon" />
          <span className="cart-badge">{cart?.length}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
