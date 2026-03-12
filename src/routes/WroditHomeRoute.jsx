import { Link } from "react-router-dom";
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
      <h1>Home Route</h1>
      <Link to="wrodit/register">Register</Link>
      <p>{home}</p>
    </>
  );
}