import { useLoaderData } from "react-router-dom";
import { fetchPostsByThread, fetchUser, fetchThread } from "../lib/wrodit";
import PostBox from "../components/post/PostBox.jsx";
import ThreadInformation from "../components/thread/ThreadInformation.jsx";

async function clientLoader({ params }) {
  const threadId = params.id;
  const thread = await fetchThread(threadId);

  const postsData = await fetchPostsByThread(threadId);
  const postsArray = postsData.content || [];

  const postsWithUsers = await Promise.all(
    postsArray.map(async post => {
      const user = await fetchUser(post.userId);
      return { ...post, username: user.username || "Unbekannt" };
    }),
  );

  return { thread, posts: postsWithUsers };
}

export default function ThreadRoute() {
  const { thread, posts } = useLoaderData();

  return (
    <>
      <ThreadInformation
        name={thread.name}
        description={thread.description}
        to={`/wrodit/create/post/${thread.id}`}
      />

      {posts.map((post, index) => (
        <PostBox
          key={index}
          createdAt={post.createdAt}
          title={post.title}
          text={post.content}
          vote={post.vote}
          name={post.username}
          threadId={thread.id}
          to={post.id}
        />
      ))}
    </>
  );
}

ThreadRoute.loader = clientLoader;
