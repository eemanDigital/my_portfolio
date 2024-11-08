import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} data-aos="fade-up">
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>About Me</h3>
          <p>
            I'm a passionate developer creating innovative web solutions. Let's
            build something amazing together!
          </p>
        </div>
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Connect</h3>
          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/share/23GfyLNABwGRsg8G/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook">
              <FaFacebookF className={styles.socialIcon} />
            </a>
            <a
              href="https://github.com/eemanDigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub">
              <FaGithub className={styles.socialIcon} />
            </a>
            <a
              href="https://www.linkedin.com/in/lukman-asinmi-359512257"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn">
              <FaLinkedin className={styles.socialIcon} />
            </a>
            <a
              href="https://x.com/LuqmanAsinmi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter ">
              <FaTwitter className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Lukman Asinmi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
