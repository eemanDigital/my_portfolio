import Navbar from "../Navbar/NavBar";
import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
