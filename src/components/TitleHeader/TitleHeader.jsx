import styles from "./titleheader.module.css";

const TitleHeader = ({ title }) => {
  return (
    <div className={styles.titleHeader}>
      <h2 className={styles.titleHeaderTitle}>{title}</h2>
    </div>
  );
};

export default TitleHeader;
