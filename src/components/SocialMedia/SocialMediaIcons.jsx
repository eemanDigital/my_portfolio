import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import "./socialMediaIcons.css";

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <ul>
        <li>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaIcons;
