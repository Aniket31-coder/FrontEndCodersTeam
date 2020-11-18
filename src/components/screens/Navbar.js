import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
        <div className="name">OCR Extractor</div>
        <a className="home link" href="/">Home</a>
        <a className="about link" href="/about">About</a>
    </div>
  );
};

export default Navbar;
