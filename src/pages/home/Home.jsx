import About from "../../components/About/About";
import ContactForm from "../../components/Contact/Contact";
import ProjectList from "../../components/FeaturedProject/ProjectList";
import { FaReact, FaNodeJs, FaHtml5, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiPostman } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";
import Hero from "../../components/Hero/Hero";
import Skills from "../../components/Skills/Skills";
import SocialMediaIcons from "../../components/SocialMedia/SocialMediaIcons";

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

const Home = () => {
  return (
    <div>
      <Hero />
      <SocialMediaIcons />
      <div id="about">
        <About />
      </div>

      <Skills skills={skills} />

      <div id="projects">
        <ProjectList />
      </div>

      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
