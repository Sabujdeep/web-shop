import React from "react";
import CustomButton from "./CustomButton";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className="footer">
      <div className="footerShop">
        <div className="footerShopIn flex flex-col justify-center items-center border h-full gap-4">
          <h1 className="text-center font-medium">Ready to Find your Perfect Plant?</h1>
          <p className="text-center">
            Browse our online store or visit us in person to experience the
            beauty of nature.
          </p>
          <CustomButton
            text={"Shop Now"}
            style={`bg-[#88ad35] w-28 rounded-[12px] text-white h-10 flex justify-center items-center hover:bg-[#698927] hover:text-white`}
            onClick={()=>navigate('/shop')}
          />
        </div>
      </div>
      <div className="footerOut">
        <Navbar navStyle={"bg-black"} textColor={'text-black hover:text-green-600'} iconStyle={"text-black"} />
        <div className="footerMain">
          <hr />
          <div className="copyright">{/* copyritght */}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
