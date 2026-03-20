import SideBar from "./SideBar";
import styles from "./Header.module.css";
import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <header>
      <SideBar />
      <Dropdown/>
    </header>
  );
}
