import "../App.css";
import React from "react";
import NavbarComponent from "../components/NavbarComponent";

const LandingPage = () => {
  return (
    <>
      <div className="w-full h-full">
        {/* navbar */}
        <NavbarComponent></NavbarComponent>
      </div>
    </>
  );
};

export default LandingPage;
