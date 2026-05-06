import { useLoaderData } from "react-router-dom";

import { fetchPostsByThread, fetchThread, fillPostUserAndThread } from "../lib/wrodit";
import PostBox from "../components/post/PostBox.jsx";
import ThreadInformation from "../components/thread/ThreadInformation.jsx";

async function clientLoader({ params }) {
  const threadId = params.id;
  const thread = await fetchThread(threadId);
  const postsPage = await fetchPostsByThread(threadId);

  const posts = await fillPostUserAndThread(postsPage);
  return { thread, posts };
}

export default function ThreadRoute() {
  const { thread, posts } = useLoaderData();
  console.log(posts);

  return (
    <>
      <ThreadInformation
        name={thread.name}
        description={thread.description}
        to={`/wrodit/create/post/${thread.id}`}
      />

      {posts.content.map(post => (
        <PostBox key={post.id} post={post} />
      ))}
    </>
  );
}

ThreadRoute.loader = clientLoader;
