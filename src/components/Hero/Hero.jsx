import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import "./hero.css";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <p className="hero-intro">Hi, my name is</p>
          <h1 className="hero-title">Lukman Asinmi.</h1>
          <p className="hero-description">
            A Lawyer turned Full Stack Software engineer. I use technology to
            build solution. I have experience building platforms and apps that
            are easy to use and visually appealing to end-users for businesses
            and corporate entities.
          </p>
          {/* <p className="hero-description">
          I'm a self-acclaimed Vuevocate. I preach the wide adoption of the
          VueJS framework to build apps on Web, Desktop, and Mobile platforms.
        </p> */}
          <Button text="Get in touch" className="bordered-hero-btn" />
        </div>
        {/* <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320">
          <path
            fill="#ffff"
            fillOpacity="1"
            d="M0,160L48,149.3C96,139,192,117,288,96C384,75,480,53,576,80C672,107,768,181,864,229.3C960,277,1056,299,1152,272C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg> */}
        <div className="hero-icons">
          <FaReact className="hero-icon react-icon" />
          <FaNodeJs className="hero-icon node-icon" />
          <DiMongodb className="hero-icon mongodb-icon" />
          <FaHtml5 className="hero-icon html-icon" />
          <FaCss3Alt className="hero-icon css-icon" />
          <RiComputerLine className="hero-icon computer-icon" />
          <SiExpress className="hero-icon express-icon" />
        </div>
      </div>
    </>
  );
};

export default Hero;
