import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
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
            <a href="/" className="navbar-item" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="navbar-item"
              onClick={toggleMenu}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="navbar-item"
              onClick={toggleMenu}>
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="navbar-item"
              onClick={toggleMenu}>
              Contact
            </ScrollLink>
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
