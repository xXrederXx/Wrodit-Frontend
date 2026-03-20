import styles from "./Header.module.css";
import Dropdown from "./Dropdown";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      {" "}
      <Link to="/">
        <img
          src={logo}
          alt="Mein Logo"
          style={{ width: "5rem", height: "5rem" }}
        ></img>{" "}
      </Link>
      <Dropdown />
    </header>
  );
}
