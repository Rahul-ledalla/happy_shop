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
  console.log(cart);
  const handleAddToCart = (product) => {
    const existingProduct = cart.cart.find((prod) => product.id === prod.id);
    if (existingProduct) {
      dispatch(incrementQuantity(existingProduct.id));
    } else {
      dispatch(addToCart(product));
    }
  };
  let addCart = true;
  return (
    <div className="container">
      <div className="inner">
        <img src={product.image} alt={product.name} />
        <p>{product?.name.substring(0, 30) + "..."}</p>
        <span>₹ {product.price}</span>
        <div className="btn_block">
          {addCart ? (
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
              <button className="btn_modCart">+</button>
              <button className="btn_modCart">-</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
