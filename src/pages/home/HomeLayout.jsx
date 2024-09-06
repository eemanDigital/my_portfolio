import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styles from "./home.module.css";

const HomeLayout = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
