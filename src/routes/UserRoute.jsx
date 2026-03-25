import PostBox from "../components/PostBox";
import UserDetail from "../components/UserDetails";
import { fetchThreadsById, fetchPostsByUser, fetchUser } from "../lib/wrodit";
import { useLoaderData } from "react-router-dom";

async function clientLoader({ params }) {
  const userId = params.id;

  const res = await fetchPostsByUser(userId);
  const posts = res.content;

  const postsWithThread = await Promise.all(
    posts.map(async (post) => {
      const thread = await fetchThreadsById(post.threadId);
      return {
        ...post,
        threadName: thread.title,
      };
    }),
  );
  console.log("posts", postsWithThread);

  return { posts: postsWithThread };
}

export default function UserRoute() {
  const data = useLoaderData();
  const posts = data.posts;
  console.log("posts", posts);

  return (
    <>
      <UserDetail />
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
