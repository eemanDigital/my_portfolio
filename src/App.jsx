import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  // Navigate,
} from "react-router-dom";
import HomeLayout from "./pages/home/HomeLayout";
import Home from "./pages/home/Home";
import ProjectDetail from "./pages/ProjectDetails/ProjectDetail";
import { useEffect, useState } from "react";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

import styles from "./app.module.css";

function App() {
  const [lightTheme, setLightTheme] = useState(true);

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

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setLightTheme(false);
    }
  }, []);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
    localStorage.setItem("theme", lightTheme ? "dark" : "light");
  };

  return (
    <main className={styles.app} data-theme={lightTheme ? "light" : "dark"}>
      <ThemeToggle lightTheme={lightTheme} toggleTheme={toggleTheme} />
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
