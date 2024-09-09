import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./pages/home/HomeLayout";
import Home from "./pages/home/Home";
import ProjectDetail from "./pages/ProjectDetails/ProjectDetail";
import styles from "./app.module.css";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import { useContext } from "react";

function App() {
  // const { lightTheme, toggleTheme } = useContext(ThemeContext);

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

  return (
    <ThemeProvider>
      <ThemedApp router={router} />
    </ThemeProvider>
  );
}

function ThemedApp({ router }) {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <div className={styles.app} data-theme={lightTheme ? "light" : "dark"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
