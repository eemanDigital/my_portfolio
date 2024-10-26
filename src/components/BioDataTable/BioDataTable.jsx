import styles from "./bioDataTable.module.css";

const BioDataTable = () => {
  return (
    <div className={styles.bioDataTable}>
      <table>
        <tbody>
          <tr>
            <td className={styles.label}>My Name:</td>
            <td>Lukman Asinmi</td>
          </tr>
          <tr>
            <td className={styles.label}>Email:</td>
            <td>asinmilukman@gmail.com</td>
          </tr>
          <tr>
            <td className={styles.label}>Country:</td>
            <td>Nigeria</td>
          </tr>
          <tr>
            <td className={styles.label}>Phone:</td>
            <td>+234-8067234189</td>
          </tr>
          <tr>
            <td className={styles.label}>City:</td>
            <td>Abuja</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BioDataTable;
