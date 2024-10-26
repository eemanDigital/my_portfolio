import React from "react";
import PropTypes from "prop-types";
import { FaGithub, FaGlobe, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./project.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageSection}>
        <img src={project.image} alt={project.title} className={styles.image} />
      </div>

      <div className={styles.contentCard}>
        <span
          className={
            project.header === "Featured Project"
              ? styles.featuredBadge
              : styles.regularBadge
          }>
          {project.header}
        </span>

        <h1 className={styles.title}>{project.title}</h1>

        <p className={styles.description}>{project.fullDescription}</p>

        <div className={styles.technologies}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionButton}>
              <FaGithub className={styles.icon} />
              <span>Code</span>
            </a>
          )}
          {project.siteUrl && (
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionButton}>
              <FaGlobe className={styles.icon} />
              <span>Site</span>
            </a>
          )}
          <Link
            to={`/projects/${project.id}/detail`}
            className={styles.actionButton}>
            <FaInfoCircle className={styles.icon} />
            <span>Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    codeUrl: PropTypes.string,
    siteUrl: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
