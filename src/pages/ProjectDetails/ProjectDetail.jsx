// ProjectDetail.jsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { project_data } from "../../projectData";
import styles from "./projectDetail.module.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = project_data.find((project) => project.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <p className={styles.notFound}>Project not found.</p>;
  }

  return (
    <div className={styles.projectDetail}>
      <header className={styles.projectHeader}>
        <h1 className={styles.projectTitle} data-aos="fade-up">
          {project.title}
        </h1>
        <p className={styles.projectTagline} data-aos="fade-up">
          {project.shortDescription}
        </p>
      </header>

      <section className={styles.projectShowcase} data-aos="fade-up">
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
        />
      </section>

      <section className={styles.projectInfo} data-aos="fade-up">
        <div className={styles.projectDescription} data-aos="fade-up">
          <h2>About the Project</h2>
          <p>{project.fullDescription}</p>
        </div>

        <div className={styles.projectMetadata} data-aos="fade-up">
          <div className={styles.metadataItem} data-aos="fade-up">
            <h3>Technologies Used</h3>
            <ul className={styles.technologyList}>
              {project.technologies.map((tech, index) => (
                <li key={index} className={styles.technologyItem}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.metadataItem} data-aos="fade-up">
            <h3>Project Timeline</h3>
            <p>{project.timeline}</p>
          </div>

          <div className={styles.metadataItem} data-aos="fade-up">
            <h3>My Role</h3>
            <p>{project.role}</p>
          </div>
        </div>
      </section>

      <section className={styles.projectChallenges} data-aos="fade-up">
        <h2>Challenges and Solutions</h2>
        <ul className={styles.challengesList}>
          {project.challenges.map((challenge, index) => (
            <li key={index} className={styles.challengeItem}>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
              <p>
                <strong>Solution:</strong> {challenge.solution}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.projectOutcomes} data-aos="fade-up">
        <h2>Outcomes and Achievements</h2>
        <ul className={styles.outcomesList}>
          {project.outcomes.map((outcome, index) => (
            <li key={index} className={styles.outcomeItem}>
              {outcome}
            </li>
          ))}
        </ul>
      </section>

      <footer className={styles.projectFooter} data-aos="fade-up">
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
