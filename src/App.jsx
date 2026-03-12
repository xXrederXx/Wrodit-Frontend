import { Outlet } from "react-router";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
