// Project.jsx
import PropTypes from "prop-types";
import { FaGithub, FaGlobe, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./project.module.css";

const Project = ({ project, index }) => {
  return (
    <div
      className={`${styles.projectCard} ${
        index % 2 === 0 ? styles.even : styles.odd
      }`}>
      <div className={styles.glassOverlay} />

      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper} data-aos="zoom-in">
            <img
              src={project.image}
              alt={project.title}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.contentSection} data-aos="fade-in">
          <h1 className={styles.title}>{project.title}</h1>

          <div
            className={
              project.header === "Featured Project"
                ? styles.featuredBadge
                : styles.headerBadge
            }>
            {project.header}
          </div>

          <div className={styles.divider} />

          <p className={styles.description}>{project.fullDescription}</p>

          <div className={styles.techContainer}>
            {project.technologies.map((tech, idx) => (
              <span key={idx} className={styles.techTag}>
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
                <FaGithub className={styles.icon} /> Code
              </a>
            )}

            {project.siteUrl && (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionButton}>
                <FaGlobe className={styles.icon} /> Site
              </a>
            )}

            <Link
              to={`/projects/${project.id}/detail`}
              className={styles.actionButton}>
              <FaInfoCircle className={styles.icon} /> Details
            </Link>
          </div>
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
  index: PropTypes.number.isRequired,
};

export default Project;
