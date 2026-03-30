import Comment from "../components/Comment";
import PostDetail from "../components/PostDetail";

import {
  fetchPostById,
  fetchUser,
  fetchThread,
  fetchCommentByPost,
} from "../lib/wrodit";
import { useLoaderData } from "react-router-dom";

async function clientLoader({ params }) {
  const postId = params.id;
  const post = await fetchPostById(postId);

  const user = await fetchUser(post.userId);
  const thread = await fetchThread(post.threadId);

  const data = await fetchCommentByPost(postId);
  const comments = data.content.filter(
    (comment) => comment.parentId === null,
  );

  return { post, user, thread, comments };
}

export default function PostRoute() {
  const { post, user, thread, comments } = useLoaderData();
  console.log(post.id);

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
        to={post.id}
      />
      <div className="commentPadding">{
        comments.map((comment) => (
          <>
            <Comment
              name={comment.username}
              postId={post.id}
              data={comment}
              lvl={0}
            />
          </>
        ))}
      </div>
    </>
  );
}

PostRoute.loader = clientLoader;
