import About from "../../components/About/About";
import ContactForm from "../../components/Contact/Contact";
import ProjectList from "../../components/FeaturedProject/ProjectList";

import Hero from "../../components/Hero/Hero";
import SocialMediaIcons from "../../components/SocialMedia/SocialMediaIcons";

// import styles from "./home.module.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <SocialMediaIcons />
      <div id="about">
        <About />
      </div>

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
