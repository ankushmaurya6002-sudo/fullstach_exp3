import React from "react";
import "./Products.css";

function Products() {
  const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Gaming Mouse", price: 45 },
    { id: 3, name: "Mechanical Keyboard", price: 120 },
    { id: 4, name: "Smart Watch", price: 199 },
    { id: 5, name: "Wireless Headphones", price: 150 },
    { id: 6, name: "Bluetooth Speaker", price: 90 },
    { id: 7, name: "Monitor 24-inch", price: 220 },
    { id: 8, name: "USB-C Hub", price: 35 },
    { id: 9, name: "Laptop Stand", price: 40 },
  ];

  return (
    <div className="page">
      <h1>Our Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <div className="price">${product.price}</div>
            <button className="add-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
