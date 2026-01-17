import React from "react";
import CustomButton from "./CustomButton";
import headerLogo from "../Utils/header-logo.svg"
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";



const Navbar = ({textColor}) => {
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={headerLogo}  alt="" />
      </div>
      <div className="navigation flex gap-9">
        {/* navigation button */}
        <CustomButton text={"Home"} style={textColor} onClick={()=>navigate("/")} />
        <CustomButton text={"Shop"} style={textColor} onClick={()=>navigate("/shop")} />
        <CustomButton text={"About"} style={textColor} onClick={()=>navigate("/about")} />
        <CustomButton text={"Contact"} style={textColor} onClick={()=>navigate("/contact")} />
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
