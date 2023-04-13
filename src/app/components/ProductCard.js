import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../features/cart/cartSlice";

import "../styles/productCard.css";

const ProductCard = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // Constants
  let productInCart = cart.cart.find((prod) => prod.id === product.id);
  // Handlers
  const handleAddToCart = (product) => {
    const existingProduct = cart.cart.find((prod) => product.id === prod.id);
    if (existingProduct) {
      dispatch(incrementQuantity(existingProduct.id));
    } else {
      dispatch(addToCart(product));
    }
  };
  const handleIncrementQuantity = (product) => {
    dispatch(incrementQuantity(product.id));
  };
  const handleDecrementQuantity = (product) => {
    dispatch(decrementQuantity(product.id));
  };
  return (
    <div className="container">
      <div className="inner">
        <img src={product.image} alt={product.name} />
        <p>{product?.name.substring(0, 30) + "..."}</p>
        <span>₹ {product.price}</span>
        {productInCart && (
          <span id="qty-in-cart">In cart : {productInCart.quantity}</span>
        )}
        <div className="btn_block">
          {!productInCart ? (
            <div>
              <button
                onClick={() => {
                  handleAddToCart(product);
                }}
                id="btn_addCart"
              >
                Add to cart
              </button>
            </div>
          ) : (
            <div className="block_modCart">
              <button
                onClick={() => handleIncrementQuantity(product)}
                className="btn_modCart"
              >
                +
              </button>
              <button
                onClick={() => handleDecrementQuantity(product)}
                className="btn_modCart"
              >
                -
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
