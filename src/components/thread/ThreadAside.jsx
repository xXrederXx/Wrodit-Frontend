import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ThreadBirthIcon from "../icons/ThreadBirthIcon.jsx";
import DateTime from "../ui/DateTime.jsx";
import RelativeTime from "../ui/RelativeTime.jsx";

import styles from "./ThreadAside.module.css";
import { fetchThreadStats } from "../../lib/wrodit.js";
import ThreadPostCountIcon from "../icons/ThreadPostCountIcon.jsx";
import ThreadUsersCountIcon from "../icons/ThreadUsersCountIcon.jsx";
import UserListItem from "../user/UserListItem.jsx";

export default function ThreadAside({ thread }) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchThreadStats(thread.id);
        setStats(res);
        console.log(res);
      } catch {
        console.error("Couldnot load thread stats");
      }
    };
    load();
  }, [thread.id]);

  return (
    <aside className={styles.container}>
      <div className={styles.contentContainer}>
        <Link to={`/thread/${thread.id}`} className={styles.threadName}>
          w/{thread.name}
        </Link>
        <p>{thread.description}</p>

        <p className={styles.greyText}>
          <ThreadBirthIcon className={styles.smallIcon} /> <DateTime dateTime={thread.createdAt} />
        </p>

        <p className={styles.greyText}>
          <ThreadPostCountIcon className={styles.smallIcon} /> {stats?.numberPosts || "N/A"} Posts
        </p>

        <p className={styles.greyText}>
          <ThreadUsersCountIcon className={styles.smallIcon} /> {stats?.numActiveUsers || "N/A"}{" "}
          Users
        </p>
      </div>
      <div className={styles.divider} />
      <div className={styles.contentContainer}>
        {stats?.activeUsers?.map(user => (
          <UserListItem key={user.id} id={user.id} username={user.username} />
        ))}
      </div>
      <div className={styles.divider} />
      <div className={styles.contentContainer}>
        <Link className={styles.lastPostName} to={`/post/${stats?.lastPost?.id}`}>
          {stats?.lastPost?.title}
        </Link>
        <div className={styles.greyText}>
          <span>u/{stats?.lastPost?.user?.username}</span>
          <RelativeTime dateTime={stats?.lastPost?.createdAt} />
        </div>
      </div>
    </aside>
  );
}
