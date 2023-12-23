import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={Logo} className="logoW " />
            <div className="content u-line">
              <Link to="/" className="linkColor">Home</Link>
            </div>
            <div className=" u-line">
              <Link to="/contact" className="linkColor">Contact</Link>
            </div>
          </div>
          <div className="navLinks">
            <div className="about u-line">
              <Link to={"/about"} className="linkColor">About</Link>
            </div>
            <div className="login u-line">
            <Link to={"/login"} className="linkColor">Login</Link>
            </div>
            <div className="sign-Up u-line"><Link to={"/signup"} className="linkColor">Sign-Up</Link></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
