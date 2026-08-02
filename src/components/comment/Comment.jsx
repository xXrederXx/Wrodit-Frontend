import styles from "./Comment.module.css";
import CommentFooter from "./CommentFooter.jsx";
import CommentHeader from "./CommentHeader.jsx";

export default function Comment({ data }) {
  return (
    <div className={styles.comment} style={{ flex: 10, minWidth: "20rem" }}>
      <CommentHeader data={data} />
      <p>{data.content}</p>
      <CommentFooter data={data} />
    </div>
  );
}
