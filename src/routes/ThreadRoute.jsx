import { useLoaderData } from "react-router-dom";

import { fetchPostsByThread, fetchThread, fillPostUserAndThread } from "../lib/wrodit";
import ThreadInformation from "../components/thread/ThreadInformation.jsx";
import PostPreview from "../components/post/preview/PostPreview.jsx";
import MetaTags from "../components/MetaTags.jsx";

async function clientLoader({ params }) {
  const threadId = params.id;
  const thread = await fetchThread(threadId);
  const postsPage = await fetchPostsByThread(threadId);

  const posts = await fillPostUserAndThread(postsPage, thread);
  return { thread, posts };
}

export default function ThreadRoute() {
  const { thread, posts } = useLoaderData();

  return (
    <>
    <MetaTags title={`${thread.name} - Wrodit`} description={`A Thread on Wrodit named "${thread.name}"`} url={window.location.href} />
      <ThreadInformation
        name={thread.name}
        description={thread.description}
        to={`/wrodit/create/post/${thread.id}`}
      />

      {posts.content.map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
    </>
  );
}

ThreadRoute.loader = clientLoader;
