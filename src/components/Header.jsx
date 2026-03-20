import SideBar from "./SideBar";
import styles from "./Header.module.css";
import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <header className={styles.header}>
      <SideBar />
      <Dropdown/>
    </header>
  );
}
