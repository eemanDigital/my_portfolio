import "./ProjectList.css";
import { projects } from "../../data";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div className="project-list-container" id="projects">
      <h1 className="section-title">My Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
