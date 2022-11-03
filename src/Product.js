import React from 'react'
import "./Product.css";
function Product() {
  return (
    
      <div className="product">
        <div className="product__info">
          <p className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            reprehenderit omnis excepturi numquam, rerum distinctio, mollitia
            quibusdam animi magnam rem repudiandae{" "}
          </p>
          <p className="product__price">
            <small>
              <strong>$</strong>
            </small>
            <strong>30</strong>
          </p>
          <div className="product__rating"> ⭐ ⭐ ⭐</div>
        </div>

        <img
          src="https://st-hummel.mncdn.com/mnresize/370/370/Content/media/ProductImg/original/980202-2001-scot-spor-canta-637945289102136578.jpg"
          alt=""
        />
        <button>add to Basket</button>
      </div>
    
  );
}

export default Product