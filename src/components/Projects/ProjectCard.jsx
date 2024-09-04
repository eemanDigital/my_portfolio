// ProjectCard.js
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import "./projectCard.css";

const ProjectCard = ({ project }) => {
  console.log(project.image, "IMG");
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="project-image"
        />
      </div>
      <div className="project-content">
        <Link
          to={`/projects/${project.id}/detail`}
          className="project-title-link">
          <h2 className="project-title">{project.title}</h2>
        </Link>
        <p className="project-short-description">{project.shortDescription}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="project-technology-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-actions">
          <a
            href={project.siteUrl}
            className="project-action-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title} site`}>
            <FaExternalLinkAlt /> Visit Site
          </a>
          <a
            href={project.codeUrl}
            className="project-action-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} code`}>
            <FaCode /> View Code
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    siteUrl: PropTypes.string.isRequired,
    codeUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
