import React from "react";

import ProductCard from "../components/ProductCard";
import { productData } from "../data/productData";
import "../styles/productList.css";

const ProductList = () => {
  return (
    <div className="product-container">
      {productData.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
