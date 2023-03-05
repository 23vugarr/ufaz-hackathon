import React from "react";
import ReactDOM from "react-dom/client";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.page";
import Trade from "./pages/Trade/Trade.components";
import Analytics from "./pages/Analytics/Analytics.page";
import Login from "./pages/Login/Login.page";

const browserRouter = createBrowserRouter([
  {

    path: "/",
    element: <App />,
    children: [ 
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/trade",
        element: <Trade />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={browserRouter} />);