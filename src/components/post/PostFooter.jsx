import { useNavigate } from "react-router-dom";
import { FaShare } from "react-icons/fa";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

import { deletePost, fetchSelfLikesPost, likePost } from "../../lib/wrodit.js";
import CommentButton from "../ui/CommentButton.jsx";
import VoteBar from "../VoteBar.jsx";
import DropdownMenu from "../ui/dropdown/DropdownMenu.jsx";
import { getLoggedInUserId } from "../../lib/session.js";
import DropdownMenuItem from "../ui/dropdown/DropdownMenuItem.jsx";

import styles from "./PostFooter.module.css";
export default function PostFooter({ post }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <VoteBar
        id={post.id}
        totalVotes={post.vote}
        getOwnVote={fetchSelfLikesPost}
        postOwnVote={likePost}
      />

      <CommentButton postId={post.id} />

      <DropdownMenu trigger={<span>...</span>}>
        {getDropdownOptions(post.user.id === getLoggedInUserId(), post.id, navigate).map(
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
        action: () => navigate(`/wrodit/edit/post/${id}`),
      },
      {
        Icon: MdOutlineDelete,
        text: "Löschen",
        action: () => handlePostDelete(id),
      },
    );
  }
  return options;
}

async function handlePostDelete(id) {
  try {
    await deletePost(id);
  } catch (err) {
    console.error(err);
  }
}
