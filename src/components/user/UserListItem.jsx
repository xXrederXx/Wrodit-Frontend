import React from "react";
import { Link } from "react-router-dom";

import ProfileIcon from "../icons/ProfileIcon.jsx";

import styles from "./UserListItem.module.css";

export default function UserListItem({ id, username }) {
  return (
    <Link to={`/user/${id}`} className={styles.container}>
      <ProfileIcon className={styles.icon} />
      <span className={styles.name}>u/{username}</span>
    </Link>
  );
}
