import styles from "./skills.module.css";
import TitleHeader from "../TitleHeader/TitleHeader";

const Skills = ({ skills }) => {
  return (
    <div className={styles.aboutSkills}>
      <TitleHeader title="Technical Expertise" />

      <ul className={styles.aboutSkillsList} data-aos="zoom-out">
        {skills.map((skill, index) => (
          <li key={index} className={styles.skillItem}>
            <div className={styles.iconWrapper}>{skill.icon}</div>
            <span className={styles.skillName}>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
