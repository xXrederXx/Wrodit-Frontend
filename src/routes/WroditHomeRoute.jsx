import PostBox from "../components/PostBox";
import { fetchPosts, fetchUser } from "../lib/wrodit";
import { useLoaderData } from "react-router-dom";

export default function WroditHomeRoute() {
  const data = useLoaderData();
  const posts = data.content;

  return (
    <>
      <h1>Posts</h1>
      {posts.map((post, index) => (
        <PostBox
          key={index}
          userLoaderData={post.userLoaderData}
          threadId={post.threadId}
          createdAt={post.createdAt}
          title={post.title}
          text={post.content}
          vote={post.vote}
          name={post.userLoaderData ? post.userLoaderData.username : "Loading..."}
        />
      ))}
    </>
  );
}

WroditHomeRoute.loader = async function clientLoader() {
  const postsData = await fetchPosts();

  const postsWithUser = await Promise.all(
    postsData.content.map(async (post) => {
      const userData = await fetchUser(post.userId);
      console.log("data::",userData);
      
      return {
        ...post,
        userLoaderData: userData,
      };
    }),
  );

  return { ...postsData, content: postsWithUser };
};
