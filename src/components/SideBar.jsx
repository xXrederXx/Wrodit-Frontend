import styles from "./SideBar.module.css";
import { useState } from "react";

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
        <div className={styles.overlayContent}></div>
      </div>
      <span onClick={openNav}>&#9776; open</span>
    </>
  );
}
