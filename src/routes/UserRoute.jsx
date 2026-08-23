import { useLoaderData, Link } from "react-router-dom";

import UserDetail from "../components/user/UserDetails.jsx";
import {
  fetchPostsByUser,
  fetchAllUserData,
  deleteUser,
  fetchUserThreads,
  fillPostUserAndThread,
  fetchUser,
} from "../lib/wrodit";
import { getLoggedInUserId, removeSession } from "../lib/session.js";
import ThreadDisplay from "../components/thread/ThreadDisplay.jsx";
import PostPreview from "../components/post/preview/PostPreview.jsx";

import styles from "./UserRoute.module.css";

async function clientLoader({ params }) {
  const userId = params.id;
  const currentUserId = getLoggedInUserId();

  const user = userId == currentUserId ? await fetchAllUserData() : await fetchUser(userId);

  const userPostsPage = await fetchPostsByUser(userId, 0, 10, true);
  const posts = await fillPostUserAndThread(userPostsPage, undefined, user);

  const threads = await fetchUserThreads();

  return { user, posts, threads, isCurrent: userId == currentUserId };
}

export default function UserRoute() {
  const { user, posts, threads, isCurrent } = useLoaderData();

  const handleUserDelete = async () => {
    try {
      await deleteUser();
      removeSession();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {isCurrent && (
        <>
          <Link onClick={handleUserDelete} className={styles.deleteButton}>
            Account Löschen
          </Link>
          <Link to={`/create/thread/${user.id}`} className={styles.deleteButton}>
            Thread erstellen
          </Link>
        </>
      )}

      <UserDetail username={user.username} email={user.email} />
      <h2>{isCurrent ? "Deine Posts" : "Seine Posts"}</h2>

      {posts.content.map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
      <h3>{isCurrent ? "Deine Threads" : "Seine Threads"}</h3>
      {threads.content.map(thread => {
        return <ThreadDisplay key={thread.id} thread={thread} />;
      })}
    </>
  );
}
UserRoute.loader = clientLoader;
