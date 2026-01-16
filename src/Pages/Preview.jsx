import React from "react";
import Navbar from "../Components/Navbar";
import CustomButton from "../Components/CustomButton";

const Preview = () => {
  return (
    <>
      <Navbar />
      <div className="previewMain flex">
        <div className="ProductImg"></div>
        <div className="ProductDetails">
          <p className="product-path"> product path</p>
          <p className="product-categories">produc category</p>
          <h2 className="product-name">product name</h2>
          <div className="product-price">{} & Free Shipping</div>
          <p className="product-details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel
            maiores hic quas dolores facilis inventore repellat, ab earum quod?
          </p>
          <div className="quantity flex">
            {/* counter */}
            <CustomButton />
          </div>
          <div className="plant-category">
            Category: {}
          </div>
           
        </div>
      </div>
    </>
  );
};

export default Preview;
