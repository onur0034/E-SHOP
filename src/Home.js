import React from "react";
import "./Home.css";
import Product from "./Product.js"
function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://ocdn.eu/pulscms-transforms/1/W9Ik9kpTURBXy9iYjZiMGY1MzI2NGEwYWUxZDkwMDY3MTUzYzA2NWFlYi5qcGeSlQMqAM0EXM0CdJMFzQMWzQGu3gABoTAF"
            alt=""
            className="header__image"
          />
          <div className="home__row">
            <Product />
            <Product />
          </div>
          <div className="home__row">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="home__row">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
