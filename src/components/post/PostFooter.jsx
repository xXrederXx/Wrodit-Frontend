import { fetchSelfLikesPost, likePost } from "../../lib/wrodit.js";

import VoteBar from "../VoteBar.jsx";

export default function PostFooter({ vote, postId }) {
  return (
    <VoteBar id={postId} totalVotes={vote} getOwnVote={fetchSelfLikesPost} postOwnVote={likePost} />
  );
}
