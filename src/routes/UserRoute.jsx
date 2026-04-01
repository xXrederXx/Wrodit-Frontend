import PostBox from "../components/post/PostBox.jsx";
import UserDetail from "../components/user/UserDetails.jsx";
import {
  fetchPostsByUser,
  fetchAllUserData,
  fetchThread,
  deleteUser,
  deletePost,
  fetchUserThreads,
} from "../lib/wrodit";
import { useLoaderData, Link } from "react-router-dom";
import style from "./UserRoute.module.css";
import ThreadInformation from "../components/thread/ThreadInformation.jsx";

async function clientLoader({ params }) {
  const userId = params.id;

  const userData = await fetchAllUserData();

  const userPostsPage = await fetchPostsByUser(userId, 0, 10, true);
  const posts = userPostsPage.content;

  const postsWithThread = await Promise.all(
    posts.map(async post => {
      const thread = await fetchThread(post.threadId);

      return {
        ...post,
        threadName: thread.name,
      };
    }),
  );

  const threadsPage = await fetchUserThreads();
  const threads = threadsPage.content;

  return { user: userData, posts: postsWithThread, threads };
}

export default function UserRoute() {
  const { user, posts, threads } = useLoaderData();

  const handleUserDelete = async () => {
    try {
      await deleteUser();
    } catch (err) {
      console.error(err);
    }
  };
  const handlePostDelete = async id => {
    try {
      await deletePost(id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Link onClick={handleUserDelete} className={style.deleteButton} to={"/wrodit/login"}>
        Account Löschen
      </Link>

      <UserDetail username={user.username} email={user.email} userId={user.id} />

      {posts.map(post => (
        <>
          <Link onClick={() => handlePostDelete(post.id)} className={style.deleteButton}>
            Post Löschen
          </Link>
          <Link to={`/wrodit/edit/post/${post.id}`} className={style.linkButton}>
            Bearbeiten
          </Link>
          <PostBox
            key={post.id}
            username={user.username}
            createdAt={post.createdAt}
            title={post.title}
            text={post.content}
            vote={post.vote}
            threadId={post.threadId}
            threadName={post.threadName}
            to={post.id}
          />
        </>
      ))}
      {threads.map(thread => (
        <ThreadInformation
          key={thread.id}
          name={thread.name}
          description={thread.description}
          to={thread.id}
        />
      ))}
    </>
  );
}
UserRoute.loader = clientLoader;
