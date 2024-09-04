import { useParams } from "react-router-dom";
import { projects } from "../../data";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import "./projectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projects.find((project) => project.id === parseInt(id)); // Find the project by ID

  if (!project) {
    return <p>Project not found.</p>;
  }

  console.log(project.carousel_images); // Ensure this logs the correct image paths

  return (
    <div className="project-detail">
      <header className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-tagline">{project.shortDescription}</p>
      </header>

      <section className="project-showcase">
        <ImageCarousel images={project.carousel_images || []} />
      </section>

      <section className="project-info">
        <div className="project-description">
          <h2>About the Project</h2>
          <p>{project.fullDescription}</p>
        </div>

        <div className="project-metadata">
          <div className="metadata-item">
            <h3>Technologies Used</h3>
            <ul className="technology-list">
              {project.technologies.map((tech, index) => (
                <li key={index} className="technology-item">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="metadata-item">
            <h3>Project Timeline</h3>
            <p>{project.timeline}</p>
          </div>

          <div className="metadata-item">
            <h3>My Role</h3>
            <p>{project.role}</p>
          </div>
        </div>
      </section>

      <section className="project-challenges">
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

      <section className="project-outcomes">
        <h2>Outcomes and Achievements</h2>
        <ul>
          {project.outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </section>

      <footer className="project-footer">
        <a
          href={project.siteUrl}
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer">
          Visit Live Site
        </a>
        <a
          href={project.codeUrl}
          className="cta-button secondary"
          target="_blank"
          rel="noopener noreferrer">
          View Source Code
        </a>
      </footer>
    </div>
  );
};

export default ProjectDetail;
