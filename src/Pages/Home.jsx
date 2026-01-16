import React from "react";
import Card from "../Components/Card";
import CustomButton from "../Components/CustomButton";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { FaCreditCard, FaTruck, FaRegHeart } from "react-icons/fa";
import { RiBox3Fill } from "react-icons/ri";
import Services from "../Components/Services";

const Home = () => {
  const serviceInfo = {
    serviceIcon: [
      <FaCreditCard />,
      <FaTruck />,
      <RiBox3Fill />,
      <FaRegHeart />,
    ],
    serviceTItle: [
      "Secure Payment",
      "Free Shipping",
      "Delivered with Care",
      "Excellent Service",
    ],
    serviceBody: [
      "Elementum feugiat diam",
      "For $50 order",
      "Lacinia pellentesque leo",
      "Blandit gravida viverra",
    ],
  };
  return (
    <>
      <Navbar />
      <div className="homeBg">
        <div className="homeBgTitle flex flex-col justify-center text-center items-center gap-5">
          <p className="tracking-[0.5rem]">WELCOME TO URBAN JUNGLE CO.</p>
          <h1 className="mt-5 mb-5">
            Discover the Beauty of <br />
            Nature at Your Fingertips
          </h1>
          <CustomButton
            text={"Shop Now"}
            style={`bg-[#88ad35] w-28 rounded-[12px] text-white h-10 flex justify-center items-center hover:bg-[#698927] hover:text-white`}
          />
        </div>
      </div>
      <div className="service">
        {serviceInfo.map(() => {
          <Services />
        })}
      </div>
      <hr />
      <div className="trendingProducts">
        <h1>Trending</h1>
        <div className="trendingList">
          {/* will run foreach here */}
          <Card />
          <Card />
          <Card />
        </div>
        <div className="sale"></div>
        <div className="categories">
          <h1>Our Categories</h1>
          <div className="categoryList">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="reviewsOut">
          <div className="reviewsContainer">
            {/* make this grid */}
            <div className="reviewsIn">
              <div>
                <h1>What our Customer Say</h1>
                <div>
                  <Card />
                </div>
              </div>
              <div>
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
