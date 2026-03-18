import styles from "./SideBar.module.css";
import { useState } from "react";
import SideBarElement from "./SideBarElement";
import { IoMenuSharp } from "react-icons/io5";

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
          <SideBarElement to={"/"} name={"Home"} onClick={closeNav} />

          <SideBarElement
            to={"wrodit/create/post"}
            name={"Post erstellen"}
            onClick={closeNav}
          />
          <SideBarElement
            to={"wrodit/create/thread"}
            name={"Thread Erstellen"}
            onClick={closeNav}
          />
        </div>
      </div>
      <span onClick={openNav}>
        <IoMenuSharp className={styles.icon}/>
      </span>
    </>
  );
}
