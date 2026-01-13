import React from "react";
import CustomButton from "./CustomButton";

const Footer = () => {
  const handleClick = () => {
    console.log("working");
  };

  return (
    <div className="footer">
      <div className="footerShop">
        <div className="footerShopIn">
          <h1>Ready to Find your Perfect Plant?</h1>
          <p>
            Browse our online store or visit us in person to experience the
            beauty of nature.
          </p>
          <CustomButton text={"Shop Now"} onClick={handleClick} />
        </div>
      </div>
      <div className="footerOut">
        <div className="footerMain">
          
          <hr />
          <div className="copyright">{/* copyritght */}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
