import { useLoaderData } from "react-router-dom";

import { fetchPosts, fillPostUserAndThread } from "../lib/wrodit";
import PostPreview from "../components/post/preview/PostPreview";

async function clientLoader() {
  const postsPage = await fetchPosts(true);

  return await fillPostUserAndThread(postsPage);
}

export default function WroditHomeRoute() {
  const data = useLoaderData();
  const posts = data.content;

  return posts.map(post => <PostPreview key={post.id} post={post} />);
}

WroditHomeRoute.loader = clientLoader;
