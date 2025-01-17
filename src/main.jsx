import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// root of all
import App from "./App.jsx";

import Profile from "./routes/Profile";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: <Profile />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
