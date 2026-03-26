import PostDetail from "../components/PostDetail";
import { fetchPostById, fetchUser, fetchThread } from "../lib/wrodit";
import { useLoaderData } from "react-router-dom";

async function clientLoader({ params }) {
  const postId = params.id;
  const post = await fetchPostById(postId);

  const user = await fetchUser(post.userId);
  const thread = await fetchThread(post.threadId);

  return { post, user, thread };
}

export default function PostRoute() {
  const { post, user, thread } = useLoaderData();

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
      />
    </>
  );
}

PostRoute.loader = clientLoader;
