import { CgProfile } from "react-icons/cg";
import styles from "./UserDetails.module.css"


export default function UserDetail({ username, email }) {
  return (
    <div className={styles.userDetail}>
      <CgProfile className={styles.profileImage}/>
      <h1>{username}</h1>
      <p>{email}</p>
      <h2>Meine Posts</h2>
    </div>
  );
}
