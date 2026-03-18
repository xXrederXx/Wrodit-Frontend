import styles from "./SideBar.module.css";
import { useState } from "react";
import SideBarElement from "./SideBarElement";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  function openNav() {
    setIsOpen(true);
  }

  function closeNav() {
    setIsOpen(false);
  }
  return (
    <>
      <div
        id="myNav"
        className={styles.overlay}
        style={{ width: isOpen ? "100%" : "0%" }}
      >
        <button className={styles.closebtn} onClick={closeNav}>
          &times;
        </button>
        <div className={styles.overlayContent}>
          <SideBarElement to={"wrodit/register"} name={"Registrieren"} onClick={closeNav} />
          <SideBarElement to={"wrodit/login"} name={"Anmelden"} onClick={closeNav}/>
        </div>
      </div>
      <span onClick={openNav}>&#9776; open</span>
    </>
  );
}
