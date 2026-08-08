import { useLoaderData } from "react-router-dom";

import PostDetail from "../components/post/PostDetail.jsx";
import { fetchPostById, fetchThread, fetchCommentByPost } from "../lib/wrodit";
import CommentsContainer from "../components/comment/CommentsContainer.jsx";
import MetaTags from "../components/MetaTags.jsx";

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
      <MetaTags
        title={`${post.title} - Wrodit`}
        description={`A post created by a user named "${post.user.username}"`}
        url={window.location.href}
        author={post.user.username}
      />
      <PostDetail post={post} />
      <div className={style.commentContainer}>
        {comments.map(comment => {
          return <CommentsContainer key={comment.id} postId={post.id} data={comment} lvl={0} />;
        })}
      </div>
    </>
  );
}

PostRoute.loader = clientLoader;
