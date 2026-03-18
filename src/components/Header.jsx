import SideBar from "./SideBar";
import { CgProfile } from "react-icons/cg";
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header>
      <SideBar />
      <CgProfile className={styles.icon} />
    </header>
  );
}
