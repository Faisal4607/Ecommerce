import React from "react";
import ProductSlider from "../components/ProductSlider";

const HomePage = () => {
  const products = [
    { id: 1, name: "Nuts - Chilgoza", image: "/images/apricot_new.png" },
    { id: 2, name: "Healthy Dried Apricot", image: "/images/brand-02.png" },
    { id: 3, name: "Mixed Dry Fruits", image: "/images/brand-03.png" },
    { id: 4, name: "Pecans & More", image: "/images/brand-04.png" },
    { id: 5, name: "Desi Delights", image: "/images/brand-05.png" },
    { id: 1, name: "Nuts - Chilgoza", image: "/images/brand-01.png" },
    { id: 2, name: "Healthy Dried Apricot", image: "/images/brand-02.png" },
    { id: 3, name: "Mixed Dry Fruits", image: "/images/brand-03.png" },
    { id: 4, name: "Pecans & More", image: "/images/brand-04.png" },
    { id: 5, name: "Desi Delights", image: "/images/brand-05.png" },
    { id: 1, name: "Nuts - Chilgoza", image: "/images/brand-01.png" },
    { id: 2, name: "Healthy Dried Apricot", image: "/images/brand-02.png" },
    { id: 3, name: "Mixed Dry Fruits", image: "/images/brand-03.png" },
    { id: 4, name: "Pecans & More", image: "/images/brand-04.png" },
    { id: 5, name: "Desi Delights", image: "/images/brand-05.png" },
  ];

  return (
    <div>
      <h2>Shop by Category</h2>
      <ProductSlider products={products} />

      <h2>Popular Products</h2>
      <ProductSlider products={products} />

      <h2>Seasonal Picks</h2>
      <ProductSlider products={products} />
    </div>
  );
};

export default HomePage;
