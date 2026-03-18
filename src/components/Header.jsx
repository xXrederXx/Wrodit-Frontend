import { Link } from "react-router-dom";
import SideBar from "./SideBar";
export default function Header() {
  return (
    <header>
      <SideBar />
      <Link to="wrodit/register">Register</Link>
      <Link to="wrodit/login">Anmelden</Link>
    </header>
  );
}
