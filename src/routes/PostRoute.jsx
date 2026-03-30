import ChildComment from "../components/CildComment";
import Comment from "../components/Comment";
import PostDetail from "../components/PostDetail";
import { Link } from "react-router-dom";

import {
  fetchPostById,
  fetchUser,
  fetchThread,
  fetchCommentByPost,
  fetchCommentByParent,
} from "../lib/wrodit";
import { useLoaderData } from "react-router-dom";

async function clientLoader({ params }) {
  const postId = params.id;
  const post = await fetchPostById(postId);

  const user = await fetchUser(post.userId);
  const thread = await fetchThread(post.threadId);

  const data = await fetchCommentByPost(postId);
  const parentComments = data.content.filter(
    (comment) => comment.parentId === null,
  );

  const commentsWithChildren = await Promise.all(
    parentComments.map(async (comment) => {
      const user = await fetchUser(comment.userId);

      const childData = await fetchCommentByParent(comment.id);

      const childrenWithUser = await Promise.all(
        childData.content.map(async (child) => {
          const childUser = await fetchUser(child.userId);

          return {
            ...child,
            username: childUser.username,
          };
        }),
      );

      return {
        ...comment,
        username: user.username,
        children: childrenWithUser,
      };
    }),
  );

  return { post, user, thread, comments: commentsWithChildren };
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
