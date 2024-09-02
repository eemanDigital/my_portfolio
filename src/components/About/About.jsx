import React from "react";
import "./about.css";
import profileImage from "../../assets/profileImage.jpg"; // Replace with the actual path to your image

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <div className="about-image-container">
            <img
              src={profileImage}
              alt="Lukman Asinmi"
              className="about-image"
            />
          </div>
          <p className="about-intro animate-text">
            Hello! I'm <span className="highlight">Lukman</span>, a software
            engineer based in Nigeria 🇳🇬.
          </p>
          <p className="about-description animate-text">
            With over 5 years in the field, I've been on a journey of continuous
            learning, exploration, and leadership. My experience spans across
            building applications and solutions for various sectors, from small
            businesses to large enterprises.
          </p>
          <p className="about-motivation animate-text">
            I'm driven by the challenge of creating solutions that users love
            and that meet business needs. Every line of code is an opportunity
            to make an impact.
          </p>
        </div>
        <div className="about-skills">
          <h3 className="about-skills-title">Tech Stack</h3>
          <ul className="about-skills-list">
            {[
              "JavaScript (ES6+)",
              "HTML & (S)CSS",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
            ].map((skill, index) => (
              <li key={index}>
                <span
                  className="skill-tag"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="animation-background"></div>
    </section>
  );
};

export default About;
