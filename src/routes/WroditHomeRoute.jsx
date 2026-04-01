import PostBox from "../components/post/PostBox.jsx";
import { fetchPosts, fetchUser, fetchThread } from "../lib/wrodit";
import { useLoaderData, redirect } from "react-router-dom";

export default function WroditHomeRoute() {
  const data = useLoaderData();
  const posts = data.content;

  return (
    <>
      {posts.map((post, index) => (
        <PostBox
          key={index}
          userLoaderData={post.userLoaderData}
          createdAt={post.createdAt}
          title={post.title}
          text={post.content}
          vote={post.vote}
          name={post.userLoaderData ? post.userLoaderData.username : "Loading..."}
          threadId={post.threadId}
          threadName={post.threadLoaderData ? post.threadLoaderData.name : "Loading..."}
          to={post.id}
        />
      ))}
    </>
  );
}

WroditHomeRoute.loader = async function clientLoader() {
  try {
    const postsData = await fetchPosts(true);

    const postsWithData = await Promise.all(
      postsData.content.map(async post => {
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
  } catch (err) {
    console.error("ERROR:", err.status);

    if (err.status === 401) {
      return redirect("/wrodit/login");
    }
    throw err;
  }
};
