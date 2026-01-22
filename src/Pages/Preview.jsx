import React from "react";
import Navbar from "../Components/Navbar";
import CustomButton from "../Components/CustomButton";
import { useProduct } from "../context/ProductContext";
import ProductDetails from "./ProductDetails";

const Preview = () => {
  const plants = useProduct()
  console.log(plants)
  return (
    <>
      <Navbar textColor={"text-black no-underline hover:text-green-600"} />
      {/* <hr className="border-t-2 border-gray-400 my-6 pt-[10rem]" /> */}
      <div className="previewMain flex pt-15">
        <ProductDetails/>
      </div>
    </>
  );
};

export default Preview;
