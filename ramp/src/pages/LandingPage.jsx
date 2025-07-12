import "../App.css";
import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import ArrowRight from "../assets/arrow-right.svg";
import Headerpicture from "../assets/header-picture.svg";
import LogoStars from "../assets/logo-stars.svg";
import Header1 from "../assets/header-lg-1.svg";
import Header2 from "../assets/header-lg-2.svg";
import Header3 from "../assets/header-lg-3.svg";

const LandingPage = () => {
  return (
    <>
      <div className="w-full h-full overflow-hidden">
        {/* navbar */}
        <NavbarComponent></NavbarComponent>
        {/* Headers */}
        <div className="flex flex-col text-wrap px-2 items-center text-center my-16 min-lg:w-full">
          <div className="flex flex-col items-center w-1/2 max-md:text-sm px-2">
            <h1 className="w-screen p-2">Spending made smarter</h1>
            <p className=" py-4 min-lg:text-wrap text-break text-balance max-lg:w-[300px]">
              Easy-to-use cards, spend limits, approval flows, vendor payments,
              and more - plus an average savings of 5%
            </p>
          </div>
        </div>
        {/* why ramp, work email and get started sm */}
        <div className="flex flex-col items-center -mt-10">
          <div className="flex gap-x-3 min-sm:hidden">
            <h3>Why Ramp</h3>
            <img src={ArrowRight} alt="arrow right" />
          </div>
          {/* small-md screens */}
          <div className="py-2 max-md:flex-col items-center w-full px-5 min-sm:hidden">
            <div className="text-[#1C1B17] bg-white/40 text-center py-3 rounded-lg">
              <p>What's your work email?</p>
            </div>
            <div className="text-[#1C1B17]/90 bg-[#E4F222] text-center max-md:py-2 mt-2 py-3 rounded-lg md:mt-0">
              <p>Get started</p>
            </div>
          </div>
          {/* lg<= screens */}
          <div className="max-sm:hidden flex gap-x-3 items-center text-center">
            {/* stars and ratings */}
            <div className="flex bg-[#2F4842]/50 px-2 gap-x-2 rounded-full py-1  justify-center">
              <div>
                <img src={LogoStars} alt="logo stars" />
              </div>
              <p>4.8 stars</p>
              <p>1,900+ reviews</p>
            </div>
            <div className="flex items-center gap-x-2">
              <p>Why Ramp</p>
              <img src={ArrowRight} alt="arrow right" />
            </div>
          </div>
          {/* work email and get started LG */}
          <div className=" max-sm:hidden gap-x-24 flex bg-white/50 justify-between  rounded-lg items-center  mt-10 pr-1 text-[#1C1B17]">
            <p className="py-3 pl-2">What's your work email?</p>
            <div className="bg-[#E4F222] py-2 rounded-lg p-2">
              <p>Get started</p>
            </div>
          </div>
          <p className="text-wrap text-center py-2 min-lg:text-sm">
            No personal credit checks or founder guarantee.
          </p>
        </div>
        <div className=" flex bg-transparent w-full min-lg:hidden mt-20 justify-center">
          <img
            src={Headerpicture}
            alt="header pictures"
            className="min-md:w-md-auto"
          />
        </div>
        {/* bottom headers for LG */}
        <div className="flex mt-16 max-lg:hidden max-w-screen-xl mx-auto overflow-hidden gap-x-4 px-4 items-center justify-center h-auto max-h-[320px] max-sm:hidden">
          <img
            src={Header1}
            alt="Header 1"
            className="w-[30%] max-w-[25vh] object-contain"
          />
          <img
            src={Header2}
            alt="Header 2"
            className="w-[50%] max-w-[80vh] object-contain"
          />
          <img
            src={Header3}
            alt="Header 3"
            className="w-[30%] max-w-[25vh] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
