import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import Button from "../Button/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Lukman Asinmi
        </a>
        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <button className="navbar-close" onClick={toggleMenu}>
            <FaTimes />
          </button>
          <li>
            <a href="#about" className="navbar-item">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="navbar-item">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-item">
              Contact
            </a>
          </li>
          <li>
            <Button text="Resume" className="bordered" />
          </li>
        </ul>
        {!isMenuOpen && (
          <button className="navbar-toggle" onClick={toggleMenu}>
            <FaBars />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
