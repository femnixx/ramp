import "../App.css";
import React from "react";
import ramp from "../assets/ramp-logo.svg";
import hamburger from "../assets/hamburger-icon.svg";

export const NavbarComponent = () => {
  return (
    <>
      <div className="flex w-full bg-white/50 justify-between min-lg:hidden py-3 items-center">
        {/* small-medium screens */}
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
    </>
  );
};

export default NavbarComponent;
