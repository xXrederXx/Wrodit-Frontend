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

  const thread = await fetchThread(postData.threadId);

  const commentData = await fetchCommentByPost(postId);
  const comments = commentData.content.filter(comment => comment.parentId === null);

  return { post: { ...postData, thread }, comments };
}

export default function PostRoute() {
  const { post, comments } = useLoaderData();

  return (
    <>
      <PostDetail post={post} />
      <div className={style.commentContainer}>
        {comments.map(comment => {
          return <Comment key={comment.id} postId={post.id} data={comment} lvl={0} />;
        })}
      </div>
    </>
  );
}

PostRoute.loader = clientLoader;
