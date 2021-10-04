import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo_header-1.png";

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img className="logo" src={logo} alt="" />
        Free Learning
      </div>
      <nav className="nav-items">
        <NavLink className="nav-link" to="/home">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/services">
          Services
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
