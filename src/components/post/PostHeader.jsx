import RelativeTime from "../ui/RelativeTime.jsx";
import ThreadDisplay from "../thread/ThreadDisplay.jsx";
import UserListItem from "../user/UserListItem.jsx"

import styles from "./PostHeader.module.css";

export default function PostHeader({ post }) {
  if (!post) {
    return <p>Loading</p>;
  }
  return (
    <header className={styles.header}>
      <UserListItem username={post.user.username} id={post.user.id} />
      <ThreadDisplay thread={post.thread} className={styles.right} />
      <RelativeTime dateTime={post.createdAt} className={styles.right} />
    </header>
  );
}
