import App from "./pages/App";

import ReactDOM from "react-dom/client";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/js/bootstrap"

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./routes/Login/Login.jsx";
import Home from "./routes/Home/Home.jsx"
import CentroAjuda from "./routes/CentroAjuda/CentroAjuda.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/centroajuda", element: <CentroAjuda /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
