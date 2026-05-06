import styles from "./PostInformation.module.css";
import { Link } from "react-router-dom";
import { timeAgo } from "../../lib/util.js";

export default function PostHeader({ post }) {
  if(!post){
    return (<p>Loading</p>)
  }
  return (
    <header className={styles.header}>
      <p>{post.user.username}</p>
      <Link className={styles.link} to={`/wrodit/thread/${post.thread.id}`}>
        {" "}
        <p>{post.thread.name}</p>
      </Link>
      <p>Vor {timeAgo(post.createdAt)}</p>
    </header>
  );
}
