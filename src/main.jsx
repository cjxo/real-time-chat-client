import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// root of all
import App from "./App.jsx";

import Profile from "./routes/Profile";
import Auth from "./routes/Auth";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

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
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/sign-in",
        element: (
          <Auth>
            <SignIn />
          </Auth>
        ),
      },
      {
        path: "/sign-up",
        element: (
          <Auth>
            <SignUp />
          </Auth>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
