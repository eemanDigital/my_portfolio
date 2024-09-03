import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import ProjectList from "../../components/Projects/ProjectList";
import SocialMediaIcons from "../../components/SocialMedia/SocialMediaIcons";

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
      <div id="contact">{/* Add your contact component here */}</div>
    </div>
  );
};

export default Home;
