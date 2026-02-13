import React from "react";
import ProductCard from "./ProductCard";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 129.99,
      image: "https://via.placeholder.com/100",
      inStock: true,
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 89.99,
      image: "https://via.placeholder.com/100",
      inStock: false,
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 199.99,
      image: "https://via.placeholder.com/100",
      inStock: true,
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: 59.99,
      image: "https://via.placeholder.com/100",
      inStock: true,
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 149.99,
      image: "https://via.placeholder.com/100",
      inStock: false,
    },
    {
      id: 6,
      name: "Laptop Stand",
      price: 39.99,
      image: "https://via.placeholder.com/100",
      inStock: true,
    },
  ];

  return (
    <div className="container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          inStock={product.inStock}
        />
      ))}
    </div>
  );
}

export default App;
