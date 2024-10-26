import styles from "./about.module.css";
import BioDataTable from "../BioDataTable/BioDataTable";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.bioSectionWrapper}>
          <h1 className={styles.title}>About Me</h1>
          <p>I like Building Solutions </p>
          <Link
            className={styles.downloadBtn}
            to="https://docs.google.com/document/d/16c7T6GkG7dvxl6Y1dsjszAVZJ5tJpX2vADTbVr676tY/edit?usp=sharing">
            <i></i>
            <i></i>
            <span> Download CV</span>
          </Link>
          <BioDataTable />

          <div className={styles.socials}></div>
        </div>

        <div className={styles.storyWrapper}>
          <p className={styles.story}>
            My journey began as a lawyer, but in 2020, I discovered my passion
            for software engineering. I embarked on a self-taught path in 2020,
            diving deep into various programming languages and technologies.
            This dedication led me to the ALX Africa Software Engineering
            program in 2022, where I further honed my skills through their
            intensive one-year curriculum.
          </p>

          <p className={styles.story}>
            Driven by my growing passion for technology, I made the bold
            decision to transition fully into software development. This move
            allowed me to focus entirely on building innovative solutions that
            bridge the gap between technology and business needs.
          </p>

          <p className={styles.story}>
            I'm motivated by the transformative power of technology across
            industries. My unique background in law, combined with my software
            engineering skills, allows me to approach problems from multiple
            angles. I'm passionate about creating impactful software that
            delivers user-centric and business-focused solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
