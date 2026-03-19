import PostBox from "../components/PostBox";
import { fetchPosts, fetchUser, fetchThread} from "../lib/wrodit";
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
          createdAt={post.createdAt}
          title={post.title}
          text={post.content}
          vote={post.vote}
          name={
            post.userLoaderData ? post.userLoaderData.username : "Loading..."
          }
          threadName={
            post.threadLoaderData ? post.threadLoaderData.name : "Loading..."
          }
        />
      ))}
    </>
  );
}

WroditHomeRoute.loader = async function clientLoader() {
  const postsData = await fetchPosts();

  const postsWithData = await Promise.all(
    postsData.content.map(async (post) => {
      const [userData, threadData] = await Promise.all([
        fetchUser(post.userId),
        fetchThread(post.threadId),
      ]);

      return {
        ...post,
        userLoaderData: userData,
        threadLoaderData: threadData,
      };
    }),
  );

  return { ...postsData, content: postsWithData };
};
