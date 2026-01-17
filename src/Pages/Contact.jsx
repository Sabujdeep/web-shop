import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import ContatcInfo from "../Components/ContatcInfo";
import Footer from "../Components/Footer";
import CustomButton from "../Components/CustomButton";
import { MdFacebook } from "react-icons/md";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // send to API later
    alert("Form submitted!");
  };
  return (
    <>
      <Navbar />
      <div
        className="contactHead flex flex-col justify-center items-center"
        style={{ color: "white" }}
      >
        <div className="contact-title leading-[5rem]">
          <p className="text-center">CONTACT US</p>
          <h1 className="connect">Let's Connect</h1>
        </div>
      </div>

      {/* Conatact main body */}
      <div className="contactMain flex justify-center">
        {/* add some margin from the child conrainer */}
        <div className="contact-message-form flex p-15 gap-20">
          <div className="message flex flex-col gap-[5rem]">
            <h1 className="font-medium" style={{ color: "black" }}>Send us Message</h1>
            <ContatcInfo />
            <ContatcInfo />
            <ContatcInfo />
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-fields"
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-fields"
                />
              </div>

              <div className="form-group">
                <label>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-fields"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="input-fields"
                />
              </div>

              <CustomButton text={"Submit"} type={"submit"} style={"bg-[#88ad35] w-28 rounded-[12px] text-white h-10 flex justify-center items-center hover:bg-[#698927] hover:text-white"}/>
            </form>
          </div>
        </div>
      </div>
      <div className="follow-socials pt-[3rem] flex flex-col justify-center items-center">
        <p className="text-[2rem]">Follow us @Urban Jungle Co.</p>
        <div className="follow-icons socialIcons pt-[2rem] flex flex-5 gap-[3rem]">
          <FaFacebook />
          <FaInstagram />
          <FaX />
          <FaYoutube />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
