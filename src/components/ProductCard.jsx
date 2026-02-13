import React from "react";

function ProductCard({ name, price }) {
  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  margin: "10px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

export default ProductCard;
