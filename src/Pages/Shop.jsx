import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import product1 from "../Utils/product-01.jpg";
import product2 from "../Utils/product-02.jpg";
import product3 from "../Utils/product-03.jpg";
import product5 from "../Utils/product-05.jpg";
import product4 from "../Utils/product-04.jpg";
import product6 from "../Utils/product-04.jpg";


const Shop = () => {
  const sortArr = [
    "Default Sorting",
    "Sort by Popularity",
    "Sort by Average",
    "Sort by Latest",
    "Sort by Price Low to High",
    "Sort by Price High to Low",
  ];

  const products = [
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
    {
      image: product4,
      productTitle: "Desert Bloom",
      productPrice: "$70.00",
    },
    {
      image: product5,
      productTitle: "Golden Glow",
      productPrice: "$85.00",
    },
    {
      image: product6,
      productTitle: "Tropical Breeze",
      productPrice: "$92.00",
    },
  ];

  const [selectedSort, setSelectedSort] = useState(sortArr[0]);

  return (
    <>
      <Navbar />
      <div className="shop flex justify-center flex-col">
        <div className="cover  h-96 flex items-center justify-center">
          <p className="font-medium text-[4rem]">Shop</p>
        </div>

        <div className="plants px-10">
          <div className="plantsIn">
            <div className="plantsHead flex justify-between items-center pt-[4rem] pr-[4.5rem] pl-[4.5rem]">
              <div className="plantCount">Showing all 6 results</div>

              <div className="plantSort">
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className=""
                >
                  {sortArr.map((plant) => (
                    <option key={plant} value={plant}>
                      {plant}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="plantsGrid grid grid-cols-3 grid-rows-2 gap-9 p-[5rem]">
                  {products.map((plant, index)=>(
                    <Card 
                      key={index}
                      productImage={plant.image}
                      productPrice={plant.productPrice}
                      productTitle={plant.productPrice}
                    />
                  ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Shop;
