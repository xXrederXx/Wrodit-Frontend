import { Outlet } from "react-router";
import Header from "./components/Header";
import { fetchAllUserData } from "./lib/wrodit";
import { useLoaderData } from "react-router-dom";

async function clientLoader() {
  const user = await fetchAllUserData();
  return { user };
}

export default function App() {
  const { user } = useLoaderData();

  return (
    <>
      <Header userId={user.id} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
App.loader = clientLoader;
