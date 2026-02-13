import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, image, inStock }) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>

      <h2>{name}</h2>
      <h3>${price}</h3>

      <span className={inStock ? "badge in" : "badge out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

export default ProductCard;
