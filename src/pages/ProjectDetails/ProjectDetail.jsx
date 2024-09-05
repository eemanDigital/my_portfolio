import { useParams } from "react-router-dom";
import { featuredProjects } from "../../featuredProjects";
import styles from "./ProjectDetail.module.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = featuredProjects.find(
    (project) => project.id === parseInt(id)
  );

  if (!project) {
    return <p className={styles.notFound}>Project not found.</p>;
  }

  return (
    <div className={styles.projectDetail}>
      <header className={styles.projectHeader}>
        <h1 className={styles.projectTitle}>{project.title}</h1>
        <p className={styles.projectTagline}>{project.shortDescription}</p>
      </header>

      <section className={styles.projectShowcase}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
        />
      </section>

      <section className={styles.projectInfo}>
        <div className={styles.projectDescription}>
          <h2>About the Project</h2>
          <p>{project.fullDescription}</p>
        </div>

        <div className={styles.projectMetadata}>
          <div className={styles.metadataItem}>
            <h3>Technologies Used</h3>
            <ul className={styles.technologyList}>
              {project.technologies.map((tech, index) => (
                <li key={index} className={styles.technologyItem}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.metadataItem}>
            <h3>Project Timeline</h3>
            <p>{project.timeline}</p>
          </div>

          <div className={styles.metadataItem}>
            <h3>My Role</h3>
            <p>{project.role}</p>
          </div>
        </div>
      </section>

      <section className={styles.projectChallenges}>
        <h2>Challenges and Solutions</h2>
        <ul>
          {project.challenges.map((challenge, index) => (
            <li key={index}>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
              <p>
                <strong>Solution:</strong> {challenge.solution}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.projectOutcomes}>
        <h2>Outcomes and Achievements</h2>
        <ul>
          {project.outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </section>

      <footer className={styles.projectFooter}>
        <a
          href={project.siteUrl}
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer">
          Visit Live Site
        </a>
        <a
          href={project.codeUrl}
          className={`${styles.ctaButton} ${styles.secondary}`}
          target="_blank"
          rel="noopener noreferrer">
          View Source Code
        </a>
      </footer>
    </div>
  );
};

export default ProjectDetail;
