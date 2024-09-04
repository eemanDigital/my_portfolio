import PropTypes from "prop-types";
import "./FeaturedProject.css";

const FeaturedProject = ({ f_project }) => {
  return (
    <div className="center-container">
      <div className="feature-project-container">
        <div className="text-content">
          <h2 className="f_header">{f_project.header}</h2>
          <h2 className="f_title">{f_project.title}</h2>
          <div id="f_desc">
            <p>{f_project.fullDescription}</p>
          </div>
          {f_project?.technologies?.map((tech, index) => (
            <span key={index} className="f_tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="featured_project_img">
          <img src={f_project.image} alt={f_project.title} />
        </div>
      </div>
    </div>
  );
};

FeaturedProject.propTypes = {
  f_project: PropTypes.shape({
    header: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default FeaturedProject;
