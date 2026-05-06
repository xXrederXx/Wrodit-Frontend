import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

import styles from "./Header.module.css";
import Dropdown from "./Dropdown.jsx";

export default function Header() {
  return (
    <header className={styles.header}>
      {" "}
      <Link to="/">
        <img src={logo} alt="Mein Logo" style={{ width: "5rem", height: "5rem" }} />{" "}
      </Link>
      <Dropdown />
    </header>
  );
}
