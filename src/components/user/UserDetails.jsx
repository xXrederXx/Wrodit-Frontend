import { Link } from "react-router-dom";

import ProfileIcon from "../icons/ProfileIcon.jsx";

import styles from "./UserDetails.module.css";

export default function UserDetail({ username, email, userId }) {
  return (
    <div className={styles.userDetail}>
      <ProfileIcon className={styles.profileImage} />
      <h1>{username}</h1>
      <p>{email}</p>
      <h2>Meine Posts</h2>
      <Link to={`/create/thread/${userId}`} className={styles.threadButton}>
        Thread erstellen
      </Link>
    </div>
  );
}
