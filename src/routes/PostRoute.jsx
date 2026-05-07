import { useLoaderData } from "react-router-dom";

import Comment from "../components/comment/Comment.jsx";
import PostDetail from "../components/post/PostDetail.jsx";
import {
  fetchPostById,
  fetchUser,
  fetchThread,
  fetchCommentByPost,
  fetchAllUserData,
} from "../lib/wrodit";

import style from "./PostRoute.module.css";

async function clientLoader({ params }) {
  const postId = params.id;
  const postData = await fetchPostById(postId);

  const user = await fetchUser(postData.userId);
  const thread = await fetchThread(postData.threadId);

  const currentUser = await fetchAllUserData();

  const commentData = await fetchCommentByPost(postId);
  const comments = commentData.content.filter(comment => comment.parentId === null);

  return { post: { ...postData, user, thread }, comments, currentUser };
}

export default function PostRoute() {
  const { post, comments, currentUser } = useLoaderData();

  return (
    <>
      <PostDetail post={post} />
      <div className={style.commentContainer}>
        {comments.map(comment => {
          const canUserEdit = currentUser.id === comment.userId;

          return (
            <Comment
              key={comment.id}
              username={comment.username}
              postId={post.id}
              data={comment}
              lvl={0}
              canEdit={canUserEdit}
              commentId={comment.id}
            />
          );
        })}
      </div>
    </>
  );
}

PostRoute.loader = clientLoader;
