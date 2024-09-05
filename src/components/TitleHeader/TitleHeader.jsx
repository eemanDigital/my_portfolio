import styles from "./titleheader.module.css";

const TitleHeader = ({ title, icon }) => {
  return (
    <div className={styles.titleHeader}>
      <h2 className={styles.titleHeaderTitle}>{title}</h2>
      <div className={styles.titleHeaderIconContainer}>
        <span className={styles.titleHeaderLine}></span>
        {/* <img src={icon} alt="icon" className="title-header-icon" /> */}
        {icon}
        <span className={styles.titleHeaderLine}></span>
      </div>
    </div>
  );
};

export default TitleHeader;
