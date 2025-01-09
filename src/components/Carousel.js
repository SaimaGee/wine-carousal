import React from "react";
import "./Carousel.css";

function Carousel({ products }) {
  return (
    <div className="carousel-container">
      <div className="carousel">
        {products.map((product, index) => (
          <div key={index} className="carousel-item">
            <div className="card">
              {product.tag && <div className="tag">{product.tag.toUpperCase()}</div>}
              <img
                src={product.image || product.imageSrc} // Handle inconsistent image key naming
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="price-section">
                {product.wasPrice && product.wasPrice.cashPrice && (
                  <span className="was-price">
                    <s>
                      {product.wasPrice.cashPrice.currencyCode} ${product.wasPrice.cashPrice.amount.toFixed(2)}
                    </s>
                  </span>
                )}
                {product.currentPrice && product.currentPrice.cashPrice && (
                  <span className="current-price">
                    {product.currentPrice.cashPrice.currencyCode} ${product.currentPrice.cashPrice.amount.toFixed(2)}
                  </span>
                )}
                {product.currentPrice && product.currentPrice.pointsPrice && (
                  <span className="points">
                    Or {product.currentPrice.pointsPrice.amount.toLocaleString()} PTS
                  </span>
                )}
              </div>
              <button className="add-to-cart">
                ADD <span className="cart-icon">🛒</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;