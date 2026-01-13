import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Shop = () => {
  const sortArr = [
    "Default Sorting",
    "Sort by Popularity",
    "Sort by Average",
    "Sort by Latest",
    "Sort by Price Low to High",
    "Sort by Price High to low",
  ];

  const [sortPlant, setSortPlant] = useState(sortArr);

  return (
    <div className="shop flex justify-center flex-col">
      <Navbar />
      <div className="cover font-medium h-96">
        <h1>Shop</h1>
      </div>
      <div className="plants">
        <div className="plantsIn border border-red-800 w">
          <div className="plantsHead">
            <div className="plantCount">6</div>
            <div className="plantSort">
              <select>
                {sortPlant.map((plant) => {
                  `<option value="${plant}">${plant}</option>`;
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
