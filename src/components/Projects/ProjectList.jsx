import "./ProjectList.css";
import { projects } from "../../data";
import ProjectCard from "./ProjectCard";
import TitleHeader from "../TitleHeader/TitleHeader";
import { BsListTask } from "react-icons/bs";

const ProjectList = () => {
  return (
    <div className="project-list-container" id="projects">
      {/* <TitleHeader title="My Projects" icon={<BsListTask size={40} />} /> */}
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
