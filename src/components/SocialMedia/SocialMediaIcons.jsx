import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import styles from "./socialMediaIcons.module.css";

const SocialMediaIcons = () => {
  return (
    <div className={styles.socialMediaIcons} data-aos="fade-right">
      <ul>
        <li>
          <a
            href="https://www.facebook.com/share/23GfyLNABwGRsg8G/?mibextid=qi2Omg"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebookF className={styles.icon} />
          </a>
        </li>

        <li>
          <a
            href="https://x.com/LuqmanAsinmi"
            target="_blank"
            rel="noopener noreferrer">
            <FaTwitter className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lukman-asinmi-359512257"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedinIn className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/eemanDigital"
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
