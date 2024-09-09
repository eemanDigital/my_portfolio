import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./hero.module.css";
import desktopImg from "../../assets/desktop1.jpg";

const Hero = () => {
  const [currentProfession, setCurrentProfession] = useState("");
  const professions = ["A Lawyer", "Software Developer", "Freelancer"];
  const [professionIndex, setProfessionIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 3000); // Change profession every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setCurrentProfession(professions[professionIndex]);
  }, [professionIndex]);

  return (
    <div className={styles.hero}>
      <div className={styles.backgroundImageContainer}>
        <img src={desktopImg} alt="Profile" className={styles.profileImage} />
      </div>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle} data-aos="fade-up">
          Lukman Asinmi
        </h1>
        <p className={styles.heroDescription} data-aos="fade-up">
          <span className={styles.profession}>{currentProfession}</span>
        </p>
        <ScrollLink smooth={true} duration={500} to="contact">
          <button className={styles.btn}>Get in touch</button>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Hero;
