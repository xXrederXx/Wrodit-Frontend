import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";

import styles from "./Header.module.css";
import DropdownMenu from "./ui/dropdown/DropdownMenu.jsx";
import { CgLogOut, CgProfile } from "react-icons/cg";
import DropdownMenuItem from "./ui/dropdown/DropdownMenuItem.jsx";
import { removeSession, useSession } from "../lib/session.js";

export default function Header() {
  const navigate = useNavigate();
  const session = useSession();

  const handleLogout = () => {
    try {
      removeSession();
      navigate(`/wrodit/login`);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <header className={styles.header}>
      {" "}
      <Link to="/" className={styles.logoIcon}>
        <img src={logo} alt="Mein Logo" />{" "}
      </Link>
      <DropdownMenu trigger={<CgProfile className={styles.dropdownTriggerIcon}/>}>
        <DropdownMenuItem onClick={() => navigate(`/wrodit/user/${session.userId}`)}>
          <div className={styles.dropdownItemContainer}>
            <CgProfile className={styles.profileAvatar} />
            <div className={styles.profileTextContainer}>
              <span>Profil Anzeigen</span>
              <span className={styles.username}>u/{session.username}</span>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>
          <div className={styles.dropdownItemContainer}>
            <CgLogOut className={styles.logoutIcon} />
            <span className={styles.logoutText}>Abmelden</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenu>
    </header>
  );
}
