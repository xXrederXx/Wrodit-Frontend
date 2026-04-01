import { BiCurrentLocation } from "react-icons/bi";
import Comment from "../components/comment/Comment.jsx";
import PostDetail from "../components/PostDetail";

import {
  fetchPostById,
  fetchUser,
  fetchThread,
  fetchCommentByPost,
  fetchAllUserData,
} from "../lib/wrodit";
import { useLoaderData } from "react-router-dom";

async function clientLoader({ params }) {
  const postId = params.id;
  const post = await fetchPostById(postId);

  const user = await fetchUser(post.userId);
  const thread = await fetchThread(post.threadId);

  const currentUser = await fetchAllUserData();

  const data = await fetchCommentByPost(postId);
  const comments = data.content.filter(comment => comment.parentId === null);

  return { post, user, thread, comments, currentUser };
}

export default function PostRoute() {
  const { post, user, thread, comments, currentUser } = useLoaderData();

  return (
    <>
      <PostDetail
        createdAt={post.createdAt}
        title={post.title}
        text={post.content}
        vote={post.vote}
        name={user.username}
        threadId={thread.id}
        threadName={thread.name}
        postId={post.id}
      />
      <div className="commentPadding">
        {comments.map(comment => {
          const isValid = currentUser.id === comment.userId;

          return (
            <Comment
              key={comment.id}
              name={comment.username}
              postId={post.id}
              data={comment}
              lvl={0}
              isEditValid={isValid}
            />
          );
        })}
      </div>
    </>
  );
}

PostRoute.loader = clientLoader;
