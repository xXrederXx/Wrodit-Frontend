import PostBox from "../components/PostBox";
import { fetchPosts } from "../lib/wrodit";
import { useLoaderData } from "react-router";

async function clientLoader() {
  return await fetchPosts();
}
export default function WroditHomeRoute() {
  const data = useLoaderData();
  const posts = data.content;

  return (
    <>
      <h1>posts</h1>
      {posts.map((post, index) => (
        <PostBox
          key={index}
          title={post.title}
          text={post.content}
          vote={post.vote}
        />
      ))}
    </>
  );
}
WroditHomeRoute.loader = clientLoader;
