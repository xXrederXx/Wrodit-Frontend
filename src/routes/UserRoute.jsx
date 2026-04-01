import PostBox from "../components/PostBox";
import UserDetail from "../components/UserDetails";
import {
  fetchPostsByUser,
  fetchAllUserData,
  fetchThread,
  deleteUser,
  deletePost,
} from "../lib/wrodit";
import { useLoaderData, Link } from "react-router-dom";

async function clientLoader({ params }) {
  const userId = params.id;

  const user = await fetchAllUserData();

  const res = await fetchPostsByUser(userId);
  const posts = res.content;

  const postsWithThread = await Promise.all(
    posts.map(async (post) => {
      const thread = await fetchThread(post.threadId);

      return {
        ...post,
        threadName: thread.name,
      };
    }),
  );

  return { user, posts: postsWithThread };
}

export default function UserRoute() {
  const data = useLoaderData();
  const user = data.user;
  const posts = data.posts;

  const handleUserDelete = async () => {
    try {
      await deleteUser();
    } catch (err) {
      console.error(err);
    }
  };
  const handlePostDelete = async (id) => {
    try {
      await deletePost(id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Link
        onClick={handleUserDelete}
        className="deleteButton"
        to={"/wrodit/login"}
      >
        Account Löschen
      </Link>

      <UserDetail
        username={user.username}
        email={user.email}
        userId={user.id}
      />

      {posts.map((post, index) => (
        <>
          <Link onClick={handlePostDelete(post.id)} className="deleteButton">
            Post Löschen
          </Link>
          <Link to={`/wrodit/edit/post/${post.id}`} className="linkButton">
            Bearbeiten
          </Link>
          <PostBox
            key={index}
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
    </>
  );
}
UserRoute.loader = clientLoader;
