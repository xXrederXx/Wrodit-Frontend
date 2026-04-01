import PostBox from "../components/PostBox";
import UserDetail from "../components/UserDetails";
import {
  fetchPostsByUser,
  fetchAllUserData,
  fetchThread,
  deleteUser,
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

  const handleDelete = async () => {
    try {
      await deleteUser(user.id);
      navigate("/wrodit/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Link onClick={handleDelete} className="deleteButton">
        Account Löschen
      </Link>

      <UserDetail
        username={user.username}
        email={user.email}
        userId={user.id}
      />

      {posts.map((post, index) => (
        <>
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
