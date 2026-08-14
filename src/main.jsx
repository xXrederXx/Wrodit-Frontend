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
import CommentRoute from "./routes/CommentRoute.jsx";
import ChildCommentRoute from "./routes/ChildCommentRoute.jsx";
import PostEditRoute from "./routes/PostEditRoute.jsx";
import CommentEditRoute from "./routes/CommentEditRoute.jsx";
import ErrorRoute from "./routes/ErrorRoute.jsx";
import LegalNotice from "./routes/legal/LegalNotice.jsx";
import PrivacyPolicy from "./routes/legal/PrivacyPolicy.jsx";
import TermsOfUse from "./routes/legal/TermsOfUse.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: App.loader,
    errorElement: <ErrorRoute />,

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
        loader: PostRoute.loader,
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
        path: "wrodit/create/thread/:id",
        element: <CreateThreadRoute />,
        action: CreateThreadRoute.action,
      },
      {
        path: "wrodit/create/comment/:id",
        element: <CommentRoute />,
        action: CommentRoute.action,
      },
      {
        path: "wrodit/create/comment/parent/:postId/:id",
        element: <ChildCommentRoute />,
        action: ChildCommentRoute.action,
      },
      {
        path: "wrodit/create/comment/parent/:postId/:id",
        element: <ChildCommentRoute />,
        action: ChildCommentRoute.action,
      },
      {
        path: "wrodit/edit/post/:id",
        element: <PostEditRoute />,
        action: PostEditRoute.action,
        loader: PostEditRoute.loader,
      },
      {
        path: "/wrodit/edit/comment/:id",
        element: <CommentEditRoute />,
        action: CommentEditRoute.action,
        loader: CommentEditRoute.loader,
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
  {
    path: "wrodit/impressum",
    element: <LegalNotice />,
  },
  {
    path: "wrodit/datenschutz",
    element: <PrivacyPolicy />,
  },
  {
    path: "wrodit/nutzungsbedingungen",
    element: <TermsOfUse />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
