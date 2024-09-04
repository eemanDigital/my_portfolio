import About from "../../components/About/About";
import ContactForm from "../../components/Contact/Contact";
import Divider from "../../components/Divider/Divider";
import FeaturedProjectList from "../../components/FeaturedProject/FeaturedProjectList";
import Hero from "../../components/Hero/Hero";
import ProjectList from "../../components/Projects/ProjectList";
import SocialMediaIcons from "../../components/SocialMedia/SocialMediaIcons";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />

      <SocialMediaIcons />
      <div id="about">
        <About />
      </div>

      <FeaturedProjectList />

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
