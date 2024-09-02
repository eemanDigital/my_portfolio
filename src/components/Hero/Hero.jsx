import React from "react";

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import "./hero.css";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <p className="hero-intro">Hi, my name is</p>
        <h1 className="hero-title">Lukman Asinmi.</h1>
        <p className="hero-description">
          A Lawyer turned Full Stack Software engineer. I use technology to
          build solution. I have experience building platforms and apps that are
          easy to use and visually appealing to end-users for businesses and
          corporate entities.
        </p>
        {/* <p className="hero-description">
          I'm a self-acclaimed Vuevocate. I preach the wide adoption of the
          VueJS framework to build apps on Web, Desktop, and Mobile platforms.
        </p> */}
        <Button text="Get in touch" className="bordered-hero-btn" />
      </div>
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
  );
};

export default Hero;
