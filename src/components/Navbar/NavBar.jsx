import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styles from "./navbar.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lightTheme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // download resume handler
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=18wSQrl4i4jTecuyTprp-yvBRH6X9UWfU";
    link.download = "Lukman_Asinmi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={styles.navbar} data-theme={lightTheme ? "light" : "dark"}>
      <div className={styles.navbarContainer}>
        <a href="/" className={styles.navbarLogo}>
          Lukman Asinmi
        </a>
        <ul
          className={`${styles.navbarMenu} ${isMenuOpen ? styles.active : ""}`}>
          <button className={styles.navbarClose} onClick={toggleMenu}>
            <FaTimes id="icon" />
          </button>

          <ThemeToggle lightTheme={lightTheme} toggleTheme={toggleTheme} />
          <li>
            <a href="/" className={styles.navbarItem} onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={200}
              className={styles.navbarItem}
              onClick={toggleMenu}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className={styles.navbarItem}
              onClick={toggleMenu}>
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className={styles.navbarItem}
              onClick={toggleMenu}>
              Contact
            </ScrollLink>
          </li>
          <li>
            <button className={styles.btn} onClick={handleDownloadResume}>
              Resume
            </button>
          </li>
        </ul>
        {!isMenuOpen && (
          <button className={styles.navbarToggle} onClick={toggleMenu}>
            <FaBars color="#ffff" id="icon" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
