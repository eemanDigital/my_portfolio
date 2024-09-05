import profileImage from "../../assets/profileImage.jpg"; // Update with the actual path to your image
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
            a software engineer based in Nigeria 🇳🇬 with over 5 years of
            experience in the field.
          </p>
          <p className={styles.aboutDescription}>
            My journey in software engineering has been marked by continuous
            learning, exploration, and leadership. I've had the privilege of
            building applications and solutions across various sectors, serving
            both small businesses and large enterprises.
          </p>
          <p className={styles.aboutMotivation}>
            I'm driven by the challenge of creating impactful solutions that
            users love and that meet critical business needs. To me, every line
            of code is an opportunity to make a difference.
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
