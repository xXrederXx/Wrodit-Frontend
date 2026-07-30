import { Outlet } from "react-router";

import Header from "./components/Header.jsx";
import BackgroundCacheCleaner from "./components/BackgroundCacheCleaner.jsx";

export default function App() {
  return (
    <>
      <BackgroundCacheCleaner />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
