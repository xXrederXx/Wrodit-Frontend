import { FaRegCommentDots } from "react-icons/fa";
import styles from "./PostFooter.module.css"

export default function PostFooter({ vote }) {
  return (
    <footer className={styles.footer}>
      <p>{vote}</p>
      <FaRegCommentDots />
    </footer>
  );
}
