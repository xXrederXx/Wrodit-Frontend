import { useLoaderData, Link } from "react-router-dom";

import PostBox from "../components/post/PostBox.jsx";
import UserDetail from "../components/user/UserDetails.jsx";
import {
  fetchPostsByUser,
  fetchAllUserData,
  deleteUser,
  deletePost,
  fetchUserThreads,
  fillPostUserAndThread,
} from "../lib/wrodit";
import { removeSession } from "../lib/session.js";

import style from "./UserRoute.module.css";


async function clientLoader({ params }) {
  const userId = params.id;
  const user = await fetchAllUserData();

  const userPostsPage = await fetchPostsByUser(userId, 0, 10, true);
  const posts = await fillPostUserAndThread(userPostsPage);

  const threads = await fetchUserThreads();

  return { user, posts, threads };
}

export default function UserRoute() {
  const { user, posts, threads } = useLoaderData();

  const handleUserDelete = async () => {
    try {
      await deleteUser();
      removeSession();
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
      <Link onClick={handleUserDelete} className={style.deleteButton}>
        Account Löschen
      </Link>

      <UserDetail username={user.username} email={user.email} userId={user.id} />

      {posts.content.map(post => (
        <>
          <Link onClick={() => handlePostDelete(post.id)} className={style.deleteButton}>
            Post Löschen
          </Link>
          <Link to={`/wrodit/edit/post/${post.id}`} className={style.linkButton}>
            Bearbeiten
          </Link>
          <PostBox key={post.id} post={post} />
        </>
      ))}
      <h3>Meine Threads</h3>
      {threads.content.map(thread => {
        return (
          <Link key={thread.id} className="threadDescription" to={`/wrodit/thread/${thread.id}`}>
            <h1>w/{thread.name}</h1>
          </Link>
        );
      })}
    </>
  );
}
UserRoute.loader = clientLoader;
