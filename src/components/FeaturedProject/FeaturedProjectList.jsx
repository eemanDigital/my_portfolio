import { featuredProjects } from "../../featuredProjects";
import TitleHeader from "../TitleHeader/TitleHeader";
import { BsListTask } from "react-icons/bs";
import FeaturedProject from "./FeaturedProject";

import "./featuredProjectList.css";

const FeaturedProjectList = () => {
  return (
    <div className="featured-list-container" id="projects">
      <TitleHeader title="My Projects" icon={<BsListTask size={40} />} />
      <div className="project-list">
        {featuredProjects.map((project) => (
          <FeaturedProject key={project.id} f_project={project} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjectList;
