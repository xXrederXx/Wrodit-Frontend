import { Link } from "react-router-dom";
export default function CommentEditButton({ isValid, commentId }) {
  return (
    <>
      {isValid && (
        <Link className="linkButton"
          to={`/wrodit/edit/comment/${commentId}`}
        >
          Bearbeiten
        </Link>
      )}
    </>
  );
}
