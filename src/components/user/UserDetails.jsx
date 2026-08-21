import ProfileIcon from "../icons/ProfileIcon.jsx";

import styles from "./UserDetails.module.css";

export default function UserDetail({ username, email }) {
  return (
    <div className={styles.userDetail}>
      <ProfileIcon className={styles.profileImage} />
      <h1>{username}</h1>
      <p>{email}</p>
    </div>
  );
}
