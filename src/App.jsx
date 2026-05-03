import { Outlet } from "react-router";
import Header from "./components/Header";
import { fetchAllUserData } from "./lib/wrodit";

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
