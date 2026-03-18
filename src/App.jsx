import { Outlet } from "react-router";
import Header from "./components/header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
