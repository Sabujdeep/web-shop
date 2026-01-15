import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import ContatcInfo from "../Components/ContatcInfo";
import { MdFacebook } from "react-icons/md";
import Footer from "../Components/Footer";


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
      <div
        className="contactHead flex flex-col justify-center"
        style={{ color: "white" }}
      >
        <div className="contact-nav sticky top-0">
          <Navbar />
        </div>
        <div className="contact-title">
          <p>CONTACT US</p>
          <h1>Let's Connect</h1>
        </div>
      </div>

      {/* Conatact main body */}
      <div className="contactMain border border-red-800 border-lg flex justify-center">
        {/* add some margin from the child conrainer */}
        <div className="contact-message-form flex m-10 gap-10">
          <div className="message">
            <h1 style={{color:"black"}}>Send us Message</h1>
            <ContatcInfo />
            <ContatcInfo />
            <ContatcInfo />
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit} >
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

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="follow-socials pt-5 pd-5">
          <h2>Follow us @Urban Jungle Co.</h2>
          <div className="follow-icons flex flex-5">
              <MdFacebook />
<MdFacebook />
<MdFacebook />
<MdFacebook />

          </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
