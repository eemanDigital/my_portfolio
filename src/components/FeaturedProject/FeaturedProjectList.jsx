import { featuredProjects } from "../../featuredProjects";
import TitleHeader from "../TitleHeader/TitleHeader";
import { BsListTask } from "react-icons/bs";
import FeaturedProject from "./FeaturedProject";
import styles from "./FeaturedProjectList.module.css";

const FeaturedProjectList = () => {
  return (
    <div className={styles.featuredListContainer} id="projects">
      <TitleHeader title="My Projects" icon={<BsListTask size={40} />} />
      <div className={styles.projectList}>
        {featuredProjects.map((project) => (
          <FeaturedProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjectList;
