import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import { useProduct } from "../context/ProductContext"


const Shop = () => {

  const plants = useProduct();

  console.log(plants)

  const sortArr = [
    "Default Sorting",
    "Sort by Popularity",
    "Sort by Average",
    "Sort by Latest",
    "Sort by Price Low to High",
    "Sort by Price High to Low",
  ];


  const [selectedSort, setSelectedSort] = useState(sortArr[0]);

  return (
    <>
      <Navbar textColor={"text-white no-underline hover:text-green-600"} />
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
                  {plants.map((plant)=>(
                    <Card 
                      key={plant.id}
                      id={plant.id}
                      productImage={plant.image}
                      productPrice={plant.productPrice}
                      productTitle={plant.productTitle}
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
