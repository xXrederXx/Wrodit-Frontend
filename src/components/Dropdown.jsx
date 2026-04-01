import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Dropdown.module.css";
import { CgProfile } from "react-icons/cg";

export default function Dropdown({ userId }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setOpen(!open);

  // Klick außerhalb schließt das Dropdown
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button onClick={toggleDropdown} className={styles.dropbtn}>
        <CgProfile />
      </button>
      <div className={`${styles.dropdownContent} ${open ? styles.show : ""}`}>
        <Link to={`/wrodit/user/${userId}`}>Mein Konto</Link>
        <Link to="/wrodit/register">Registrieren</Link>
        <Link to="/wrodit/login">Anmelden</Link>
      </div>
    </div>
  );
}
