import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";
import { removeSession, useSession } from "../lib/session.js";

import styles from "./Header.module.css";
import DropdownMenu from "./ui/dropdown/DropdownMenu.jsx";
import DropdownMenuItem from "./ui/dropdown/DropdownMenuItem.jsx";
import ProfileIcon from "./icons/ProfileIcon.jsx";
import LogoutIcon from "./icons/LogoutIcon.jsx";
import DropdownMenuSeparator from "./ui/dropdown/DropdownMenuSeperator.jsx";
import LegalNoticeIcon from "./icons/LegalNoticeIcon.jsx";
import PrivacyPolicyIcon from "./icons/PrivacyPolicyIcon.jsx";
import TermsOfUseIcon from "./icons/TermsOfUseIcon.jsx";

export default function Header() {
  const navigate = useNavigate();
  const session = useSession();

  const handleLogout = () => {
    try {
      removeSession();
      navigate(`/login`);
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
      <DropdownMenu trigger={<ProfileIcon className={styles.dropdownTriggerIcon} />}>
        <DropdownMenuItem onClick={() => navigate(`/user/${session.userId}`)}>
          <div className={styles.dropdownItemContainer}>
            <ProfileIcon className={styles.profileAvatar} />
            <div className={styles.profileTextContainer}>
              <span>Profil Anzeigen</span>
              <span className={styles.username}>u/{session.username}</span>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownItem onClick={handleLogout} icon={LogoutIcon} text={"Abmelden"} />
        <DropdownMenuSeparator />
        <DropdownItem
          onClick={() => navigate("/impressum")}
          icon={LegalNoticeIcon}
          text={"Impressum"}
        />
        <DropdownMenuSeparator />
        <DropdownItem
          onClick={() => navigate("/datenschutz")}
          icon={PrivacyPolicyIcon}
          text={"Datenschutzerklärung"}
        />
        <DropdownItem
          onClick={() => navigate("/nutzungsbedingungen")}
          icon={TermsOfUseIcon}
          text={"Nutzungsbedingungen"}
        />
      </DropdownMenu>
    </header>
  );
}

function DropdownItem({ onClick, icon: Icon, text }) {
  return (
    <DropdownMenuItem onClick={onClick}>
      <div className={styles.dropdownItemContainer}>
        <Icon className={styles.logoutIcon} />
        <span className={styles.logoutText}>{text}</span>
      </div>
    </DropdownMenuItem>
  );
}
