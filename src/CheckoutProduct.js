import React from 'react'
import "./CheckoutProduct.css";
import Subtotal from './Subtotal';
function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
        alt=""
        className="checkoutProduct__image"
      />
      <div className="product__info">
        <p className="checkoutProduct__title">
          Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
          Water Repellent Fabric for Men and Women (Blue)
        </p>
        <p className="checkoutProduct__price">
          <small>
            <strong>$</strong>
                  </small>
                  <strong>20</strong>
              </p>
              <div className="checkoutProduct__rating">⭐</div>
              <button>remove from Basket</button>
              <div className="checkout__right">
                  <Subtotal/>
              </div>
      </div>
    </div>
  );
}

export default CheckoutProduct