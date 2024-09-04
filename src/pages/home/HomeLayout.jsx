import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div className="home">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
