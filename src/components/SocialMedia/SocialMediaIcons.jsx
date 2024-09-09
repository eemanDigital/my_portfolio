import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import styles from "./socialMediaIcons.module.css";

const SocialMediaIcons = () => {
  return (
    <div className={styles.socialMediaIcons}>
      <ul>
        <li data-aos="fade-right">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebookF className={styles.icon} />
          </a>
        </li>
        <li data-aos="fade-right">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram className={styles.icon} />
          </a>
        </li>
        <li data-aos="fade-right">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaTwitter className={styles.icon} />
          </a>
        </li>
        <li data-aos="fade-right">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedinIn className={styles.icon} />
          </a>
        </li>
        <li data-aos="fade-right">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaIcons;
