import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./ProductSlider.css";

const ProductSlider = ({ products }) => {
  // Use a ref to control the slider
  const sliderRef = useRef(null);

  // Scroll the slider to the left
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -200, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  };

  // Scroll the slider to the right
  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 200, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  };

  return (
    <div className="slider-container">
      {/* Left Scroll Button */}
      <button className="scroll-button left" onClick={scrollLeft}>
        &#9664;
      </button>

      {/* Slider Items */}
      <div className="slider" ref={sliderRef}>
        {products.map((product) => (
          <div className="slider-item" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
              <p className="product-name">{product.name}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button className="scroll-button right" onClick={scrollRight}>
        &#9654;
      </button>
    </div>
  );
};

export default ProductSlider;
