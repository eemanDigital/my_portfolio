import PropTypes from "prop-types";
import { FaGithub, FaGlobe, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./project.module.css";

const Project = ({ project }) => {
  return (
    <div className={styles.featuredProject}>
      <div className={styles.thumbnail}>
        <img className={styles.image} src={project.image} alt={project.title} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{project.title}</h1>
        <div
          className={
            project.header === "Featured Project"
              ? styles.featuredBtn
              : styles.header
          }>
          {project.header}
        </div>
        <hr className={styles.separator} />
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
              <FaGithub /> Code
            </a>
          )}
          {project.siteUrl && (
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionButton}>
              <FaGlobe /> Site
            </a>
          )}
          <Link
            to={`/projects/${project.id}/detail`}
            className={styles.actionButton}>
            <FaInfoCircle /> Details
          </Link>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
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

export default Project;
