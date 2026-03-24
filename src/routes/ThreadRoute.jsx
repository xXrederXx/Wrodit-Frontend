import { useLoaderData } from "react-router-dom";
import { fetchThreadsById, fetchPostsByThread, fetchUser } from "../lib/wrodit";
import PostBox from "../components/PostBox";
import ThreadInformation from "../components/ThreadInformation";

const PAGE = 1;
const SIZE = 10;

async function clientLoader({ params }) {
  const threadId = params.id;
  const thread = await fetchThreadsById(threadId);

  const postsData = await fetchPostsByThread(threadId, PAGE, SIZE);
  const postsArray = postsData.content || [];

  const postsWithUsers = await Promise.all(
    postsArray.map(async (post) => {
      const user = await fetchUser(post.userId);
      return { ...post, username: user.username || "Unbekannt" };
    }),
  );

  return { thread, posts : postsWithUsers};
}

export default function ThreadRoute() {
  const { thread, posts } = useLoaderData();

  return (
    <>
    <ThreadInformation name={thread.name} description={thread.description} to={`/wrodit/create/post/${thread.id}`}/>

      {posts.map((post, index) => (
        <PostBox
          key={index}
          createdAt={post.createdAt}
          title={post.title}
          text={post.content}
          vote={post.vote}
          name={post.username}
          threadId={thread.id}
        />
      ))}
    </>
  );
}

ThreadRoute.loader = clientLoader;
