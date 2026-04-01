import PostBox from "../components/post/PostBox.jsx";
import { fetchPosts, fetchUser, fetchThread } from "../lib/wrodit";
import { useLoaderData } from "react-router-dom";

async function clientLoader() {
  const postsData = await fetchPosts();

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
}

export default function WroditHomeRoute() {
  const data = useLoaderData();
  const posts = data.content;

  return posts.map(post => (
    <PostBox
      key={post.id}
      userLoaderData={post.userLoaderData}
      createdAt={post.createdAt}
      title={post.title}
      text={post.content}
      vote={post.vote}
      username={post.userLoaderData ? post.userLoaderData.username : "Loading..."}
      threadId={post.threadId}
      threadName={post.threadLoaderData ? post.threadLoaderData.name : "Loading..."}
      to={post.id}
    />
  ));
}

WroditHomeRoute.loader = clientLoader;
