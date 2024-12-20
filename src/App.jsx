import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./pages/home/HomeLayout";
import Home from "./pages/home/Home";
import ProjectDetail from "./pages/ProjectDetails/ProjectDetail";
import "aos/dist/aos.css";
import AOS from "aos";

import { useEffect } from "react";

function App() {
  // scroll animation handler
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="projects/:id/detail"
          element={<ProjectDetail project={ProjectDetail} />}></Route>
      </Route>
    )
  );

  // return (
  //   <ThemeProvider>
  //     <ThemedApp router={router} />
  //   </ThemeProvider>
  // );
  // }

  // function ThemedApp({ router }) {
  //   const { lightTheme } = useContext(ThemeContext);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
