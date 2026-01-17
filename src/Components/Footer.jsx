import React from "react";
import CustomButton from "./CustomButton";
import Navbar from "./Navbar";

const Footer = () => {
  const handleClick = () => {
    console.log("working");
  };

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
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="footerOut">
        <Navbar textColor={'text-[#88ad35] hover:text-[#698927]'} />
        <div className="footerMain">
          <hr />
          <div className="copyright">{/* copyritght */}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
