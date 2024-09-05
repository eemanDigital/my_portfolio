import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import styles from "./hero.module.css";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <p className={styles.heroIntro}>Hi, my name is</p>
          <h1 className={styles.heroTitle}>Lukman Asinmi.</h1>
          <p className={styles.heroDescription}>
            A Lawyer turned Full Stack Software engineer. I use technology to
            build solution. I have experience building platforms and apps that
            are easy to use and visually appealing to end-users for businesses
            and corporate entities.
          </p>
          <ScrollLink smooth={true} duration={500} to="contact">
            <button className={styles.btn}>Get in touch</button>
          </ScrollLink>
        </div>
        <div className={styles.heroIcons}>
          <FaReact className={`${styles.heroIcon} ${styles.reactIcon}`} />
          <FaNodeJs className={`${styles.heroIcon} ${styles.nodeIcon}`} />
          <DiMongodb className={`${styles.heroIcon} ${styles.mongodbIcon}`} />
          <FaHtml5 className={`${styles.heroIcon} ${styles.htmlIcon}`} />
          <FaCss3Alt className={`${styles.heroIcon} ${styles.cssIcon}`} />
          <RiComputerLine
            className={`${styles.heroIcon} ${styles.computerIcon}`}
          />
          <SiExpress className={`${styles.heroIcon} ${styles.expressIcon}`} />
        </div>
      </div>
    </>
  );
};

export default Hero;
