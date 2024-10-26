import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { project_data } from "../../projectData";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

import styles from "./projectDetail.module.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = project_data.find((project) => project.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className={styles.notFound}>Project not found</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => {
      const newIndex = prev === project.screenshots?.length - 1 ? 0 : prev + 1;
      const container = document.querySelector(`.${styles.imageContainer}`);
      if (container) {
        container.style.transform = `translateX(-${newIndex * 100}%)`;
      }
      return newIndex;
    });
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => {
      const newIndex = prev === 0 ? project.screenshots?.length - 1 : prev - 1;
      const container = document.querySelector(`.${styles.imageContainer}`);
      if (container) {
        container.style.transform = `translateX(-${newIndex * 100}%)`;
      }
      return newIndex;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.shortDescription}>{project.shortDescription}</p>

        <div className={styles.actionButtons}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}>
              <FaGlobe size={20} />
              Visit Live Site
            </a>
          )}
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}>
              <FaGithub size={20} />
              View Source Code
            </a>
          )}
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <div className={styles.imageCarousel}>
            <div className={styles.imageContainer}>
              {project.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`Project screenshot ${index + 1}`}
                  className={styles.carouselImage}
                />
              ))}
            </div>

            <button onClick={prevImage} className={styles.prevButton}>
              <FaChevronLeft size={24} />
            </button>
            <button onClick={nextImage} className={styles.nextButton}>
              <FaChevronRight size={24} />
            </button>

            <div className={styles.indicators}>
              {project.screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    const container = document.querySelector(
                      `.${styles.imageContainer}`
                    );
                    if (container) {
                      container.style.transform = `translateX(-${
                        index * 100
                      }%)`;
                    }
                  }}
                  className={
                    currentImageIndex === index
                      ? styles.indicatorActive
                      : styles.indicator
                  }
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className={styles.mainContent}>
        <div>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>About the Project</h2>
            <p>{project.fullDescription}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Challenges and Solutions</h2>
            {project?.challenges?.map((challenge, index) => (
              <div key={index} className={styles.challengeCard}>
                <h3 className={styles.challengeTitle}>{challenge?.title}</h3>
                <p className={styles.challengeDescription}>
                  {challenge?.description}
                </p>
                <div className={styles.solution}>
                  <span className={styles.solutionLabel}>Solution: </span>
                  <span>{challenge?.solution}</span>
                </div>
              </div>
            ))}
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Outcomes and Achievements</h2>
            <ul className={styles.outcomesList}>
              {project?.outcomes?.map((outcome, index) => (
                <li key={index} className={styles.outcomeItem}>
                  {outcome}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div>
          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>Technologies Used</h2>
            <div className={styles.techTags}>
              {project?.technologies?.map((tech, index) => (
                <span key={index} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>Project Timeline</h2>
            <p>{project.timeline}</p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>My Role</h2>
            <p>{project.role}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
