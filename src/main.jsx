import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// root of all
import App from "./App.jsx";

import Homepage from "./routes/Homepage";
import Profile from "./routes/Profile";
import Auth from "./routes/Auth";
import Home from "./routes/Home";
import Messaging from "./routes/Messaging";
import Explore from "./routes/Explore";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { AuthProvider } from "./context/Auth";
import { ResizeProvider } from "./context/Resize";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
        element: <Homepage />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/profile",
            element: <Profile />
          },
          {
            path: "/explore",
            element: <Explore />
          },
          {
            path: "/message/:id",
            element: <Messaging />,
          },
        ],
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
    <ResizeProvider>
      <RouterProvider router={router} />
    </ResizeProvider>
  </StrictMode>,
);
