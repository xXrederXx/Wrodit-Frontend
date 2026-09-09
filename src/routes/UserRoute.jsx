import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";

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
import Button from "../components/ui/Button.jsx";
import ThreadAside from "../components/thread/ThreadAside.jsx";

import styles from "./UserRoute.module.css";

async function clientLoader({ params }) {
  const userId = params.id;
  const currentUserId = getLoggedInUserId();

  const user = userId === currentUserId ? await fetchAllUserData() : await fetchUser(userId);

  const userPostsPage = await fetchPostsByUser(userId, 0, 10, true);
  const posts = await fillPostUserAndThread(userPostsPage, undefined, user);

  const threads = await fetchUserThreads(userId);

  return { user, posts, threads, isCurrent: userId === currentUserId };
}

export default function UserRoute() {
  const { user, posts, threads, isCurrent } = useLoaderData();

  const [selected, setSelected] = useState("posts");

  const handleUserDelete = async () => {
    try {
      await deleteUser();
      removeSession();
    } catch (err) {
      console.error(err);
    }
  };

  const Content = () => {
    switch (selected) {
      case "posts":
        return posts.content.map(post => <PostPreview key={post.id} post={post} />);
      case "threads":
        return (
          <div className={styles.threadContainer}>
            {threads.content.map(thread => {
              return (
                <ThreadAside
                  key={thread.id}
                  thread={thread}
                  containerClassName={styles.threadDisplay}
                />
              );
            })}
          </div>
        );

      default:
        throw new Error("Unknown state: " + selected);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.userContainer}>
          <UserDetail username={user.username} />
        </div>
        {isCurrent && (
          <>
            <Link onClick={handleUserDelete} className={styles.button}>
              Account Löschen
            </Link>
            <Link to={`/create/thread/${user.id}`} className={styles.button}>
              Thread erstellen
            </Link>
          </>
        )}

        <div className={styles.buttonsContaienr}>
          <button
            className={selected === "posts" ? styles.button : styles.buttonTransparent}
            type="button"
            onClick={() => setSelected("posts")}>
            Posts
          </button>
          <button
            className={selected === "threads" ? styles.button : styles.buttonTransparent}
            type="button"
            onClick={() => setSelected("threads")}>
            Threads
          </button>
        </div>

        {Content()}
      </div>
    </div>
  );
}
UserRoute.loader = clientLoader;
