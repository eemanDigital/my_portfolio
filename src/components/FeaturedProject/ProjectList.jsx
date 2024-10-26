import { project_data } from "../../projectData";
import TitleHeader from "../TitleHeader/TitleHeader";
import { BsListTask } from "react-icons/bs";
import Project from "./Project";
import styles from "./projectList.module.css";

const ProjectList = () => {
  return (
    <div className={styles.featuredListContainer} id="projects">
      <TitleHeader title="My Projects" icon={<BsListTask size={20} />} />
      <div className={styles.projectList}>
        {project_data.map((project, index) => (
          <Project key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
