import React from "react";
import Card from "../Components/Card";
import CustomButton from "../Components/CustomButton";
import Footer from "../Components/Footer";

const Home = () => {
  
  return (
    <>
      <div className="homeBg">
        <h1>Home</h1>
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
