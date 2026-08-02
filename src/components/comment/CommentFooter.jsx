import { Link } from "react-router-dom";
import { deleteComment, fetchSelfLikesComment, likeComment } from "../../lib/wrodit.js";
import VoteBar from "../VoteBar.jsx";
import { getLoggedInUserId } from "../../lib/session.js";
import styles from "./CommentFooter.module.css";
import DropdownMenu from "../ui/dropdown/DropdownMenu.jsx";
import DropdownMenuItem from "../ui/dropdown/DropdownMenuItem.jsx";
import DropdownMenuSeparator from "../ui/dropdown/DropdownMenuSeperator.jsx";
import { FaShare } from "react-icons/fa";
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

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
      <Link to={`/wrodit/create/comment/parent/${postId}/${data.id}`} className={styles.linkButton}>
        Komentieren
      </Link>
      <DropdownMenu trigger={<span>...</span>}>
        {getDropdownOptions(data.user.id === getLoggedInUserId(), data.id, navigate).map(
          ({ Icon, text, action }) => (
            <DropdownMenuItem onClick={action} key={text}>
              <Icon size={16} className={styles.dropdownIcon}></Icon>
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
      Icon: FaShare,
      text: "Teilen",
      action: () => navigator.clipboard.writeText(window.location.href),
    },
  ];

  if (isEditable) {
    options.push(
      {
        Icon: MdOutlineEdit,
        text: "Bearbeiten",
        action: () => navigate(`/wrodit/edit/comment/${id}`),
      },
      {
        Icon: MdOutlineDelete,
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
