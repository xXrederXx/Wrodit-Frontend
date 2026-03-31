import { CgProfile } from "react-icons/cg";
import styles from "./UserDetails.module.css";
import { Link } from "react-router-dom";

export default function UserDetail({ username, email, userId }) {
  return (
    <div className={styles.userDetail}>
      <CgProfile className={styles.profileImage} />
      <h1>{username}</h1>
      <p>{email}</p>
      <h2>Meine Posts</h2>
      <Link to={`/wrodit/create/thread/${userId}`} className="threadButton">
        Thread erstellen
      </Link>
    </div>
  );
}
