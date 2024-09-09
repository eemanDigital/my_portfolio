import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import SocialMediaIcons from "../../components/SocialMedia/SocialMediaIcons";

import styles from "./home.module.css";

const HomeLayout = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Outlet />
      {/* <SocialMediaIcons /> */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
