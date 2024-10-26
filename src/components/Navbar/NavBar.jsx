import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styles from "./navbar.module.css";

import { handleDownloadResume } from "../../utils/download";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { lightTheme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <a href="/" className={styles.navbarLogo}>
          Lukman Asinmi
        </a>
        <ul
          className={`${styles.navbarMenu} ${isMenuOpen ? styles.active : ""}`}>
          <button className={styles.navbarClose} onClick={toggleMenu}>
            <FaTimes id="icon" />
          </button>

          {/* <ThemeToggle lightTheme={lightTheme} toggleTheme={toggleTheme} /> */}
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
            <button
              className={styles.btn}
              onClick={() => handleDownloadResume()}>
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
