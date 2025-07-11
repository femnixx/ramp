import "../App.css";
import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import ArrowRight from "../assets/arrow-right.svg";
import Headerpicture from "../assets/header-picture.svg";

const LandingPage = () => {
  return (
    <>
      <div className="w-full h-full">
        {/* navbar */}
        <NavbarComponent></NavbarComponent>
        {/* Headers */}
        <div className="text-wrap px-2 flex-col items-center text-center my-16">
          <h1 className="">Spending made smarter</h1>
          <p className=" py-4">
            Easy-to-use cards, spend limits, approval flows, vendor payments,
            and more - plus an average savings of 5%
          </p>
        </div>
        {/* why ramp, work email and get started */}
        <div className="flex flex-col items-center -mt-10">
          <div className="flex gap-x-3">
            <h3>Why Ramp</h3>
            <img src={ArrowRight} alt="arrow right" />
          </div>
          <div className="py-2 flex-col items-center w-full px-5 ">
            <div className="text-[#1C1B17] bg-white/40 text-center py-3 rounded-lg">
              <p>What's your work email?</p>
            </div>
            <div className="text-[#1C1B17]/90 bg-[#E4F222] text-center mt-2 py-3 rounded-lg">
              <p>Get started</p>
            </div>
            <p className="text-wrap text-center py-2">
              No personal credit checks or founder guarantee.
            </p>
          </div>
          <div className="border-none bg-transparent mt-7">
            <img src={Headerpicture} alt="header pictures" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
