import "./about.css";
import profileImage from "../../assets/profileImage.jpg"; // Update with the actual path to your image
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";

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
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-header">
          <div className="about-image-container">
            <img
              src={profileImage}
              alt="Lukman Asinmi"
              className="about-image"
            />
          </div>
          <div className="about-title-container">
            <h1 className="about-name">Hello! I'm Lukman</h1>
            <h2 className="about-title">
              Software Engineer based in Nigeria 🇳🇬
            </h2>
          </div>
        </div>
        <div className="about-content">
          <p className="about-intro">
            Hello! I'm <span className="highlight">Lukman Asinmi</span>, a
            software engineer based in Nigeria 🇳🇬 with over 5 years of
            experience in the field.
          </p>
          <p className="about-description">
            My journey in software engineering has been marked by continuous
            learning, exploration, and leadership. I've had the privilege of
            building applications and solutions across various sectors, serving
            both small businesses and large enterprises.
          </p>
          <p className="about-motivation">
            I'm driven by the challenge of creating impactful solutions that
            users love and that meet critical business needs. To me, every line
            of code is an opportunity to make a difference.
          </p>
        </div>
        <div className="about-skills">
          <h3 className="about-skills-title">Technical Expertise</h3>
          <ul className="about-skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">
                {skill.icon}
                <span className="skill-name">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
