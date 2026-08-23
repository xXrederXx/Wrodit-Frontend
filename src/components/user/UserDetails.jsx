import ProfileIcon from "../icons/ProfileIcon.jsx";

import styles from "./UserDetails.module.css";

export default function UserDetail({ username }) {
  return (
    <div className={styles.container}>
      <ProfileIcon className={styles.profileImage} />
      <div className={styles.infoContainer}>
        <h1>{username}</h1>
        <p>u/{username}</p>
      </div>
    </div>
  );
}
