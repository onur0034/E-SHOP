import React from "react";
import "./Product.css";
function Product({ id, title, image, rating, price }) {
  return (
    <div className="product">
      <div className="product__info">
        <p className="title">{title}</p>
        <p className="product__price">
          <small>
            <strong>$</strong>
          </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button>add to Basket</button>
    </div>
  );
}

export default Product;
