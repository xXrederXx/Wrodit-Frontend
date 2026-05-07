import { Link } from "react-router-dom";

import { deleteComment } from "../../lib/wrodit.js";

import style from "./CommentEditButton.module.css";
export default function CommentEditButton({ isValid, commentId }) {
  const handleCommentDelete = async () => {
    try {
      await deleteComment(commentId);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    isValid && (
      <>
        <Link className={style.linkButton} to={`/wrodit/edit/comment/${commentId}`}>
          Bearbeiten
        </Link>
        <Link onClick={handleCommentDelete} className={style.deleteButton}>
          Kommentar Löschen
        </Link>
      </>
    )
  );
}
