import styles from "./certificate.module.css";
import certificate from "../../assets/certificate.png";

const Certificate = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Certification</h1>
      <div className={styles.wrapper} data-aos="zoom-out">
        <div className={styles.card}>
          <img src={certificate} alt="Lukman Asinmi certificate" />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
