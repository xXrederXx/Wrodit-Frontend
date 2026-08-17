import { Link, useNavigate } from "react-router-dom";

import { deleteComment, fetchSelfLikesComment, likeComment } from "../../lib/wrodit.js";
import VoteBar from "../VoteBar.jsx";
import { getLoggedInUserId } from "../../lib/session.js";
import DropdownMenu from "../ui/dropdown/DropdownMenu.jsx";
import DropdownMenuItem from "../ui/dropdown/DropdownMenuItem.jsx";
import CommentButton from "../ui/CommentButton.jsx";
import ShareIcon from "../icons/ShareIcon.jsx";
import EditIcon from "../icons/EditIcon.jsx";
import DeleteIcon from "../icons/DeleteIcon.jsx";

import styles from "./CommentFooter.module.css";

export default function CommentFooter({ postId, data }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <VoteBar
        id={data.id}
        totalVotes={data.votes}
        getOwnVote={fetchSelfLikesComment}
        postOwnVote={likeComment}
      />
      <CommentButton postId={postId} commentId={data.id} />

      <DropdownMenu trigger={<span>...</span>}>
        {getDropdownOptions(data.user.id === getLoggedInUserId(), data.id, navigate).map(
          ({ Icon, text, action }) => (
            <DropdownMenuItem onClick={action} key={text}>
              <Icon size={16} className={styles.dropdownIcon} />
              <span className={styles.dropdownText}>{text}</span>
            </DropdownMenuItem>
          ),
        )}
      </DropdownMenu>
    </div>
  );
}

function getDropdownOptions(isEditable, id, navigate) {
  const options = [
    {
      Icon: ShareIcon,
      text: "Teilen",
      action: () => navigator.clipboard.writeText(window.location.href),
    },
  ];

  if (isEditable) {
    options.push(
      {
        Icon: EditIcon,
        text: "Bearbeiten",
        action: () => navigate(`/edit/comment/${id}`),
      },
      {
        Icon: DeleteIcon,
        text: "Löschen",
        action: () => handleCommentDelete(id),
      },
    );
  }
  return options;
}

async function handleCommentDelete(id) {
  try {
    await deleteComment(id);
  } catch (err) {
    console.error(err);
  }
}
