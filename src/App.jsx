import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  // Navigate,
} from "react-router-dom";
import HomeLayout from "./pages/home/HomeLayout";
import Home from "./pages/home/Home";
import "./app.css";
import ProjectDetail from "./pages/ProjectDetails/ProjectDetail";

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

function App() {
  return (
    <main className="app">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
