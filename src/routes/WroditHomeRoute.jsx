import PostBox from "../components/post/PostBox.jsx";
import { fetchPosts, fillPostUserAndThread } from "../lib/wrodit";
import { useLoaderData } from "react-router-dom";

async function clientLoader() {
  const postsPage = await fetchPosts(true);

  return await fillPostUserAndThread(postsPage);
}

export default function WroditHomeRoute() {
  const data = useLoaderData();
  const posts = data.content;
  console.log(posts);
  

  return posts.map(post => (
    <PostBox
      key={post.id}
      post={post}
    />
  ));
}

WroditHomeRoute.loader = clientLoader;
