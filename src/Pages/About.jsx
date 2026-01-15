import React from "react";
import Navbar from "../Components/Navbar";
import aboug from "../Utils/about-us.jpg";
import CoreValues from "../Components/CoreValues";
import ourMission from "../Utils/our-mission.jpg";
import { GoCheckCircle } from "react-icons/go";
import MissionCheck from "../Components/MissionCheck";
import Footer from "../Components/Footer";


const About = () => {
  return (
    <>
      <Navbar />
      <div className="aboutHead flex flex-col justify-center">
        <div className="aboutHeadTitle flex flex-col justify-center">
          <p className="text-center">ABOUT</p>
          <h1 className="text-center">
            We are Passionate <br /> About Our Work
          </h1>
        </div>
      </div>
      <div className="about-sec flex p-20 border border-red-200 rounded-lg p-4">
        <div className="about-sec-image">
          <img src={aboug} alt="" />
        </div>
        <div className="about-sec-ceo">
          <h1>
            We strive to provide our <br /> customers with the highest <br />
            quality
          </h1>
          <p>
            Urban Jungle Co. was founded in 1960 by a group of plant enthusiasts
            who recognized the positive impact that plants can have on our
            lives. Whether it’s purifying the air, reducing stress, or simply
            adding a touch of beauty to your environment, plants are more than
            just decoration—they’re a lifestyle.
          </p>
          <hr />
          <p>
            “We love what we do & create partnerships with our clients to ensure
            their digital transformation is positioned for long-term success.”
          </p>
          {/*  */}
          <div className="ceo">
            <img src="" alt="" />
            <div className="ceoAbout">
              <h3>Karen Lynn</h3>
              <p>CEO & Co-founder @ Company</p>
            </div>
          </div>
        </div>
      </div>
      {/* Vakues */}
      <div className="coreValues flex flex-col justify-center ">
        <h1 className="valueTitle text-center">
          Our Core Values that Drive <br /> Everything We Do
        </h1>
        <div className="valueIn border border-lg border-red-800 grid grid-cols-3 grid-rows-2">
          <CoreValues />
          <CoreValues />
          <CoreValues />
          <CoreValues />
          <CoreValues />
          <CoreValues />
        </div>
      </div>
      {/* Our Mission */}
      <div className="ourMission border border-lg border-red-800 flex">
        <div className="ourMissionBody">
          <h1 style={{color:'black'}}>Our Mission</h1>
          <p>
            Our mission is to make the world a greener place, one plant at a
            time. We strive to provide our customers with the highest quality
            plants and plant care products, along with the knowledge and support
            to help them thrive.
          </p>
          <div className="our-mission-checks grid grid-cols-2 grid-rows-2">
            <MissionCheck/><MissionCheck/><MissionCheck/><MissionCheck/>
          </div>
        </div>
        <div className="ourMissionImg">
          <img src={ourMission} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
