import { useState } from "react";
import PropTypes from "prop-types";
// import ImageCarousel from "./ImageCarousel";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

/**
 * ProjectCard component displays individual project details.
 * @param {Object} project - The project data.
 */
const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="project-card">
      <h2 className="project-title">{project.title}</h2>
      <p className="project-short-description">{project.shortDescription}</p>
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        <div className="project-image-overlay">
          <button
            className="project-info-button"
            onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Less Info" : "More Info"}
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="project-details">
          <Link
            to={`projects/${project.id}/detail`}
            className="project-full-description">
            {project.fullDescription}
          </Link>
          <ul className="project-technologies">
            {project.technologies.map((tech, index) => (
              <li key={index} className="project-technology-tag">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="project-actions">
        <a
          href={project.siteUrl}
          className="project-action-button"
          target="_blank"
          rel="noopener noreferrer">
          Visit Site
        </a>
        <a
          href={project.codeUrl}
          className="project-action-button"
          target="_blank"
          rel="noopener noreferrer">
          View Code
        </a>
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
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    siteUrl: PropTypes.string.isRequired,
    codeUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
