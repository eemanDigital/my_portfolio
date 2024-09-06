import { featuredProjects } from "../../featuredProjects";
import TitleHeader from "../TitleHeader/TitleHeader";
import { BsListTask } from "react-icons/bs";
import Project from "./Project";
import styles from "./projectList.module.css";

const ProjectList = () => {
  return (
    <div className={styles.featuredListContainer} id="projects">
      <TitleHeader title="My Projects" icon={<BsListTask size={40} />} />
      <div className={styles.projectList}>
        {featuredProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
