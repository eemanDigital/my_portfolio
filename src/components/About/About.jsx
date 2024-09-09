import profileImage from "../../assets/profileImage.jpg";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";
import { IoIosPerson } from "react-icons/io";

import styles from "./about.module.css";
import TitleHeader from "../TitleHeader/TitleHeader";
import Certificate from "../CERT/Certificate";

const skills = [
  { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
  { name: "HTML & (S)CSS", icon: <FaHtml5 /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Ant Design", icon: <AiOutlineAntDesign /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
];

const About = () => {
  return (
    <section className={styles.about} id="about">
      <TitleHeader title="About Me" icon={<IoIosPerson size={40} />} />
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <div className={styles.aboutImageContainer}>
            <img
              src={profileImage}
              alt="Lukman Asinmi"
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.aboutTitleContainer}>
            {/* <h1 className={styles.aboutName}>Hello! I'm Lukman</h1> */}
            <h2 className={styles.aboutTitle}>
              Software Engineer based in Nigeria 🇳🇬
            </h2>
          </div>
        </div>
        <div className={styles.aboutContent}>
          <p className={styles.aboutIntro}>
            Hello! I'm <span className={styles.highlight}>Lukman Asinmi</span>,
            a software engineer based in Nigeria 🇳🇬.
          </p>
          <p className={styles.aboutDescription}>
            My journey began as a lawyer, but in 2020, I discovered my passion
            for software engineering. After years of managing to balance both
            fields, I took the bold step in 2023 to resign from my position as
            counsel in a law office where i was working and fully dedicate
            myself to software development.
          </p>
          <p className={styles.aboutDetails}>
            I honed my skills through a one-year Software Engineering program
            with <b>ALX Africa</b> (a leading technology training provider in
            Africa), and since then, I've been building innovative solutions
            that bridge the gap between technology and business needs.
          </p>
          <p className={styles.aboutMotivation}>
            I'm driven by the belief that technology can transform industries,
            and I'm passionate about creating software that makes an impact.
            Every project is an opportunity to combine my legal background with
            engineering to deliver user-centric and business-focused solutions.
          </p>
        </div>

        <div className={styles.aboutSkills}>
          <div>
            <h3 className={styles.aboutSkillsTitle}>Technical Expertise</h3>
            <ul className={styles.aboutSkillsList}>
              {skills.map((skill, index) => (
                <li key={index} className={styles.skillItem}>
                  {skill.icon}
                  <span className={styles.skillName}>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Certificate />
      </div>
    </section>
  );
};

export default About;
