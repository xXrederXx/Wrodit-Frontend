import { Link } from "react-router-dom";
import { deleteComment } from "../lib/wrodit";
export default function CommentEditButton({ isValid, commentId }) {
  const handleCommentDelete = async () => {
    try {
      await deleteComment(commentId);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      {isValid && (
        <>
          <Link className="linkButton" to={`/wrodit/edit/comment/${commentId}`}>
            Bearbeiten
          </Link>
          <Link onClick={handleCommentDelete} className="deleteButton">
            Kommentar Löschen
          </Link>
        </>
      )}
    </>
  );
}
