import profileImage from "../../assets/profileImage.jpg";
import { FaReact, FaNodeJs, FaHtml5, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiPostman } from "react-icons/si";
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
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Postman", icon: <SiPostman /> },
];

const About = () => {
  return (
    <section className={styles.about} id="about">
      <TitleHeader title="About Me" icon={<IoIosPerson size={20} />} />
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
            <h2 className={styles.aboutTitle} data-aos="fade-up">
              Software Engineer based in Nigeria 🇳🇬
            </h2>
          </div>
        </div>
        <div className={styles.aboutContent}>
          <p className={styles.aboutIntro} data-aos="fade-up">
            Hello! I'm <span className={styles.highlight}>Lukman Asinmi</span>,
            a software engineer based in Nigeria 🇳🇬.
          </p>

          <p className={styles.aboutDescription} data-aos="fade-up">
            My journey began as a lawyer, but in 2020, I discovered my passion
            for software engineering. I embarked on a self-taught path in 2020,
            diving deep into various programming languages and technologies.
            This dedication led me to the ALX Africa Software Engineering
            program in 2022, where I further honed my skills through their
            intensive one-year curriculum.
          </p>

          <p className={styles.aboutDescription} data-aos="fade-up">
            Driven by my growing passion for technology, I made the bold
            decision to transition fully into software development. This move
            allowed me to focus entirely on building innovative solutions that
            bridge the gap between technology and business needs.
          </p>

          <p className={styles.aboutMotivation} data-aos="fade-up">
            I'm motivated by the transformative power of technology across
            industries. My unique background in law, combined with my software
            engineering skills, allows me to approach problems from multiple
            angles. I'm passionate about creating impactful software that
            delivers user-centric and business-focused solutions.
          </p>
        </div>

        <div className={styles.aboutSkills}>
          <div>
            <h3 className={styles.aboutSkillsTitle} data-aos="fade-up">
              Technical Expertise
            </h3>
            <ul className={styles.aboutSkillsList}>
              {skills.map((skill, index) => (
                <li key={index} className={styles.skillItem} data-aos="fade-up">
                  {skill.icon}
                  <span className={styles.skillName}>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <Certificate /> */}
      </div>
    </section>
  );
};

export default About;
