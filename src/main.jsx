import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import WroditHomeRoute from "./routes/WroditHomeRoute.jsx";
import PostRoute from "./routes/PostRoute.jsx";
import ThreadRoute from "./routes/ThreadRoute.jsx";
import UserRoute from "./routes/UserRoute.jsx";
import RegisterRoute from "./routes/RegisterRoute.jsx";
import LoginRoute from "./routes/LoginRoute.jsx";
import CreatePostRoute from "./routes/CreatePostRoute.jsx";
import CreateThreadRoute from "./routes/CreateThreadRoute.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: App.loader,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <WroditHomeRoute />
          </ProtectedRoute>
        ),
        loader: WroditHomeRoute.loader,
      },
      {
        path: "wrodit/post/:id",
        element: <PostRoute />,
      },
      {
        path: "wrodit/thread/:id",
        element: <ThreadRoute />,
        loader: ThreadRoute.loader,
      },
      {
        path: "wrodit/user/:id",
        element: (
          <ProtectedRoute>
            <UserRoute />
          </ProtectedRoute>
        ),
        loader: UserRoute.loader,
      },
      {
        path: "wrodit/create/post/:id",
        element: (
          <ProtectedRoute>
            <CreatePostRoute />
          </ProtectedRoute>
        ),
        action: CreatePostRoute.action,
      },
      {
        path: "wrodit/create/thread",
        element: <CreateThreadRoute />,
        action: CreateThreadRoute.action,
      },
    ],
  },
  {
    path: "wrodit/login",
    element: <LoginRoute />,
    action: LoginRoute.action,
  },
  {
    path: "wrodit/register",
    element: <RegisterRoute />,
    action: RegisterRoute.action,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
