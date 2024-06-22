// src/components/ProductDetails.js
import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product, onBack }) => {
  if (!product) return <div></div>;

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p className="price">{product.price}</p>
      <p className="description">{product.description}</p> <br>
         </br>
      <button onClick={onBack} className="back-button">Back</button>

    </div>
  );
};

export default ProductDetails;
