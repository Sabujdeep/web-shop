import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

const Shop = () => {
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
    <div className="shop flex justify-center flex-col">
      <Navbar />

      <div className="cover font-medium h-96 flex items-center justify-center">
        <h1 className="text-4xl">Shop</h1>
      </div>

      <div className="plants px-10">
        <div className="plantsIn">
          <div className="plantsHead flex justify-between items-center py-4">
            <div className="plantCount">Showing all 6 results</div>

            <div className="plantSort">
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="border px-3 py-2 rounded"
              >
                {sortArr.map((plant) => (
                  <option key={plant} value={plant}>
                    {plant}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="plantsGrid grid grid-cols-3 grid-rows-2 gap-4">
            <Card /><Card /><Card /><Card /><Card /><Card />
          </div>
        </div>
      </div>
    <Footer />

    </div>
  );
};

export default Shop;
