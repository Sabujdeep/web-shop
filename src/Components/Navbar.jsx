import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const handleClick = () =>{
    console.log('working')
  }
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <div className="navigation">
        {/* navigation button */}
        <CustomButton text={"Home"} onClick={handleClick} />
        <CustomButton text={"Shop"} onClick={handleClick} />
        <CustomButton text={"About"} onClick={handleClick} />
        <CustomButton text={"Contact"} onClick={handleClick} />
      </div>
      <div className="socialIcons">
        <div className="icons">

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
