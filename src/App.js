import React from 'react';
import './App.css';
import laptop from './images/laptop.jpg';
import shoes from './images/shoes.jpg';
import cap from './images/cap.jpg';

function App() {
  const products = [
    { id: 1, name: "Laptop", price: "$999", image: laptop },
    { id: 2, name: "Shoes", price: "$50", image: shoes },
    { id: 3, name: "Cap", price: "$10", image: cap }
  ];

  return (
    <div className="App">
      <h1>My Ecommerce Store</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
