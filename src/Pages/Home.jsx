import React from "react";
import Card from "../Components/Card";
import CustomButton from "../Components/CustomButton";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { FaCreditCard, FaTruck, FaRegHeart } from "react-icons/fa";
import { RiBox3Fill } from "react-icons/ri";
import Services from "../Components/Services";
import product1 from "../Utils/product-01.jpg";
import product2 from "../Utils/product-02.jpg";
import product3 from "../Utils/product-03.jpg";
import product5 from "../Utils/product-05.jpg";
import product4 from "../Utils/product-04.jpg";
import ClientReviewCard from "../Components/ClientReviewCard";
import { useNavigate } from "react-router-dom";

// import categoryImg from "../Utils/categoryplant.png";


const Home = () => {

  const navigate = useNavigate();

  const serviceInfo = [
    {
      icon: <FaCreditCard />,
      title: "Secure Payment",
      body: "Elementum feugiat diam",
    },
    {
      icon: <FaTruck />,
      title: "Free Shipping",
      body: "For $50 order",
    },
    {
      icon: <RiBox3Fill />,
      title: "Delivered with Care",
      body: "Lacinia pellentesque leo",
    },
    {
      icon: <FaRegHeart />,
      title: "Excellent Service",
      body: "Blandit gravida viverra",
    },
  ];

  const productInfo = [
    {
      image: product1,
      productTitle: "Zen Bamboo Grove",
      productPrice: "$90.00",
    },
    {
      image: product2,
      productTitle: "Starlight Succulent",
      productPrice: "$95.00",
    },
    {
      image: product3,
      productTitle: "Silver Mist",
      productPrice: "$92.00",
    },
  ];

  const popularProductInfo = [
    {
      image: product5,
      productTitle: "Desert Bloom",
      productPrice: "$70.00",
    },
    {
      image: product4,
      productTitle: "Golden Glow",
      productPrice: "$85.00",
    },
    {
      image: product3,
      productTitle: "Silver Mist",
      productPrice: "$92.00",
    },
  ];

  return (
    <>
      <Navbar textColor={"text-white no-underline hover:text-green-600"} />
      <div className="homeBg">
        <div className="homeBgTitle flex flex-col justify-center text-center items-center gap-5">
          <p className="tracking-[0.5rem]">WELCOME TO URBAN JUNGLE CO.</p>
          <h1 className="mt-5 mb-5">
            Discover the Beauty of <br />
            Nature at Your Fingertips
          </h1>
          <CustomButton
            text={"Shop Now"}
            onClick={()=> navigate('/shop')} 
            style={`bg-[#88ad35] w-28 rounded-[12px] text-white h-10 flex justify-center items-center hover:bg-[#698927] hover:text-white`}
          />
        </div>
      </div>
      <div className="service flex m-[5rem] justify-between">
        {serviceInfo.map((serv, index) => (
          <Services
            key={index}
            serviceIcon={serv.icon}
            serviceTitle={serv.title}
            serviceBody={serv.body}
          />
        ))}
      </div>
      <hr className="w-[90vw] ml-auto mr-auto" />
      <div className="trendingProducts">
        <h1>Trending</h1>
        <div className="trendingList">
          {productInfo.map((product, index) => (
            <Card
              key={index}
              productPrice={product.productPrice}
              productTitle={product.productTitle}
              productImage={product.image}
            />
          ))}
        </div>
        <div className=" sale flex flex-col justify-center items-center gap-3">
          <h1 className="text-center">
            Flash Sale: Up to 50% Off <br />
            On Select Items!
          </h1>
          <p className="text-white">
            Don’t miss out on our flash sale event! For a limited time, enjoy up
            to 50% off on a selection of our best-selling products.
          </p>
          <CustomButton
            text={"Shop Now"}
            onClick={()=> navigate('/shop')}
            style={`bg-[#88ad35] w-28 rounded-[12px] text-white h-10 flex justify-center items-center hover:bg-[#698927] hover:text-white`}
          />
        </div>
        <div className="categories">
          <h1>Our Categories</h1>
          <div className="categoryList">
            <div className="categoryImg">
              <img src="images/categoryplant.png" alt="category" />
            </div>
          </div>
        </div>
        <div className="premierDestination p-[5rem]">
          <div className="premier-content flex">
            <img src="images/about-us.jpg" alt="" />

            <div className="premier-body ml-30 p-15 flex flex-col gap-5 ">
              <h1 className="text-black font-medium">
                Your Premier <br />
                Destination for All <br />
                Green.
              </h1>
              <p className="mt-5">
                At Urban Jungle Co., we believe in the transformative power of
                plants. Whether you’re a seasoned gardener or just starting your
                green journey, our curated selection of plants will inspire and
                enrich your living space.
              </p>
              <hr className="font-medium" />
              <div className="premier-stats flex gap-8">
                <div className="premier-first">
                  <p className="font-medium text-[2rem]">98%</p>
                  <p>Customer Satisfaction</p>
                </div>
                <div className="premier-second">
                  <p className="font-medium text-[2rem]">103k</p>
                  <p>Plants Sold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popularProducts">
          <h1>Popular Products</h1>
          <div className="popularProductsDisplay flex p-[7rem] gap-[1.5rem]">
            {popularProductInfo.map((popProduct, index) => (
              <Card
                key={index}
                productPrice={popProduct.productPrice}
                productTitle={popProduct.productTitle}
                productImage={popProduct.image}
              />
            ))}
          </div>
        </div>
        <div className="reviewsOut p-[13rem]">
          
            {/* make this grid */}
            <div className="reviewsIn grid grid-cols-2 grid-rows-2 gap-5">
              <div className="flex flex-col gap-4">
                <p className="text-black text-[3rem]">What our Customer Say</p>
                <div>
                  <ClientReviewCard
                    text={
                      "I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them."
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <ClientReviewCard text={"I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them."} />
                <ClientReviewCard text={"I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them."}/>
              </div>
            </div>
        
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
