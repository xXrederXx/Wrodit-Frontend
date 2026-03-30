import { FcLike } from "react-icons/fc";
import {
  AiOutlineHeart,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";
import styles from "./PostFooter.module.css";

export default function PostFooter({ vote }) {
  return (
    <footer className={styles.footer}>
      <p>
        {vote} <AiOutlineHeart /><FcLike/>
      </p>
      <AiOutlineDislike />
      <AiFillDislike/>

    </footer>
  );
}
