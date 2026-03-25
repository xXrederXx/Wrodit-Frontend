import PostBox from "../components/PostBox";
import UserDetail from "../components/UserDetails";
import {
  fetchThreadsById,
  fetchPostsByUser,
  fetchAllUserData,
} from "../lib/wrodit";
import { useLoaderData } from "react-router-dom";

async function clientLoader({ params }) {
  const userId = params.id;

  const user = await fetchAllUserData();

  const res = await fetchPostsByUser(userId);
  const posts = res.content;

  const postsWithThread = await Promise.all(
    posts.map(async (post) => {
      const thread = await fetchThreadsById(post.threadId);
      console.log("thread:", thread);

      return {
        ...post,
        threadName: thread.name,
      };
    }),
  );
  console.log("posts", postsWithThread);

  return { user, posts: postsWithThread };
}

export default function UserRoute() {
  const data = useLoaderData();
  const user = data.user;
  const posts = data.posts;
  console.log("posts", posts.threadName);

  return (
    <>
      <UserDetail username={user.username} email={user.email} />
      {posts.map((post, index) => (
        <PostBox
          key={index}
          createdAt={post.createdAt}
          title={post.title}
          text={post.content}
          vote={post.vote}
          threadId={post.threadId}
          threadName={post.threadName}
        />
      ))}
    </>
  );
}
UserRoute.loader = clientLoader;
