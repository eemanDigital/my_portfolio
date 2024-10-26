import { Link as ScrollLink } from "react-scroll";
import styles from "./hero.module.css";
import profileImg from "../../assets/profileImage.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer} data-aos="fade-left">
        <p>Hello, I am </p>
        <h1 className={styles.heroTitle}>
          Lukman Asinmi. Welcome to My Portfolio
        </h1>

        <div className={styles.heroDescription}>
          <span>FullStack Developer</span>
          <span>Lawyer</span>
        </div>
        <ScrollLink smooth={true} duration={500} to="contact">
          <button className={styles.btn}>Get in Touch</button>
        </ScrollLink>
      </div>

      <div className={styles.heroImgBox} data-aos="zoom-in">
        <div className={styles.imgBoxContent}>
          <img src={profileImg} alt="Profile" className={styles.grayscale} />
          <h2>Need A FullStack Developer?</h2>
          <Link to="#contact">Hire Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
