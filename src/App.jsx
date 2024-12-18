import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar  from "./components/Navbar"
import Footer from "./components/Footer"
const Home = lazy(() => import("./Pages/Home"));
const Docs = lazy(() => import("./Pages/Docs/Docs"));
const Docs2 = lazy(() => import("./Pages/Docs/Docs2"));
const Docs3 = lazy(() => import("./Pages/Docs/Docs3"));
const Docs4 = lazy(() => import("./Pages/Docs/Docs4"));

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/docs", element: <Docs /> },
  { path: "/docs2", element: <Docs2 /> },
  { path: "/docs3", element: <Docs3 /> },
  { path: "/docs4", element: <Docs4 /> },
]);

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
