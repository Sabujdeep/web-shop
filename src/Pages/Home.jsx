import React from "react";
import Card from "../Components/Card";
import CustomButton from "../Components/CustomButton";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  
  return (
    <>
      <Navbar />
      <div className="homeBg">
        <div className="homeBgTitle flex flex-col justify-center text-center">
          <p>WELCOME TO URBAN JUNGLE CO.</p>
          <h1 className="mt-5 mb-5">Discover the Beauty of <br />Nature at Your Fingertips</h1>
          <CustomButton text={'Shop'} />
        </div>
      </div>
      <div className="service">
        <h1>service</h1>
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
