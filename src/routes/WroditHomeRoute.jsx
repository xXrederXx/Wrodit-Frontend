import { fetchhome } from "../lib/auth";

import { useState, useEffect } from "react";

export default function HomeRoute() {
  const [home, setHome] = useState("");

  useEffect(() => {
    async function load() {
      const res = await fetchhome();
      const data = await res.text();
      setHome(data);
    }

    load();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <p>{home}</p>
    </>
  );
}
