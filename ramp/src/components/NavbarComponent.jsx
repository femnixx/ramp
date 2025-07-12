import "../App.css";
import React from "react";
import ramp from "../assets/ramp-logo.svg";
import hamburger from "../assets/hamburger-icon.svg";

export const NavbarComponent = () => {
  return (
    <>
      {/* small-medium screens */}
      <div className="flex w-full bg-white/50 justify-between  py-3 items-center min-lg:hidden">
        <div className="pl-5">
          <img src={ramp} alt="ramp logo" />
        </div>
        <div className="flex gap-x-5 pr-5">
          <div className="text-black bg-[#1F1F1F]/5 px-3 py-1 rounded-lg border-1 border-white/30">
            <p>Sign in</p>
          </div>
          <div className="flex bg-[#1F1F1F]/5 px-3 py-1 rounded-lg">
            <img src={hamburger} alt="hamburger icon" />
          </div>
        </div>
      </div>
      {/* lg screens */}
      <div className="flex w-full bg-white/50 justify-between max-lg:hidden py-3 px-5 ">
        <div className="flex">
          <img src={ramp} alt="ramp" />
        </div>
        <div className="flex justify-between w-1/2 text-black items-center">
          <p>Products</p>
          <p>Solutions</p>
          <p>Customers</p>
          <p>Resources</p>
          <p>Pricing</p>
        </div>
        <div className="flex gap-x-3 text-black">
          <div className="bg-transparent border-1  border-white/50 px-5 py-1 rounded-lg">
            <p>Sign in</p>
          </div>
          <div className="bg-[#E4F222] rounded-lg px-5 py-1">
            <p>See a demo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
