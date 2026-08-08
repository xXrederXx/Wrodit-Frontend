import { Link } from "react-router-dom";

import RelativeTime from "../ui/RelativeTime.jsx";

import styles from "./PostInformation.module.css";

export default function PostHeader({ post }) {
  console.log(post);
  
  if (!post) {
    return <p>Loading</p>;
  }
  return (
    <header className={styles.header}>
      <p>{post.user.username}</p>
      <Link className={styles.link} to={`/wrodit/thread/${post.thread.id}`}>
        {" "}
        <p>{post.thread.name}</p>
      </Link>
      <RelativeTime dateTime={post.createdAt} />
    </header>
  );
}
