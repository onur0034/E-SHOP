import React from 'react'
import "./Product.css";
function Product() {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p className="title">title</p>
          <p className="product__price">price</p>
          <div className="product__rating"> ⭐ ⭐ ⭐</div>
        </div>

        <img
          src="https://www.sefamerve.com/image/cache/data/201904/04/sefamerve_sirt_cantasi_bmdcanta_ts136si_4137691554369881587_1-752x1152.jpg"
          alt=""
          
              />
              <button>add to Basket</button>
      </div>
    </div>
  );
}

export default Product