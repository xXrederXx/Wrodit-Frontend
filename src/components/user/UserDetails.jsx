import { Link } from "react-router-dom";

import styles from "./UserDetails.module.css";
import ProfileIcon from "../icons/ProfileIcon";

export default function UserDetail({ username, email, userId }) {
  return (
    <div className={styles.userDetail}>
      <ProfileIcon className={styles.profileImage} />
      <h1>{username}</h1>
      <p>{email}</p>
      <h2>Meine Posts</h2>
      <Link to={`/wrodit/create/thread/${userId}`} className={styles.threadButton}>
        Thread erstellen
      </Link>
    </div>
  );
}
