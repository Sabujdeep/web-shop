import React from "react";
import CustomButton from "./CustomButton";
import headerLogo from "../Utils/header-logo.svg"
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi2";



const Navbar = () => {
  const handleClick = () =>{
    console.log('working')
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={headerLogo} alt="" />
      </div>
      <div className="navigation flex gap-9">
        {/* navigation button */}
        <CustomButton text={"Home"} onClick={handleClick} />
        <CustomButton text={"Shop"} onClick={handleClick} />
        <CustomButton text={"About"} onClick={handleClick} />
        <CustomButton text={"Contact"} onClick={handleClick} />
        <div className="socialIcons flex gap-4">
          <MdFacebook />
          <FaInstagram />
          <FaYoutube />
          <FaX />

      </div>
      <HiShoppingBag className="shopping-bag" />

      </div>

      
    </nav>
  );
};

export default Navbar;
