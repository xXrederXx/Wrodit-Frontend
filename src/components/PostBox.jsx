import PostText from "./PostText";
import PostTitle from "./PostTitle";
import PostInformation from "./PostInformation";
import styles from "./PostBox.module.css";
import PostFooter from "./PostFooter";

export default function PostBox({
  title,
  text,
  vote,
  userId,
  threadId,
  createdAt,
}) {
  return (
    <article>
      <PostInformation userId={userId} threadId={threadId} createdAt={createdAt}/>
      <PostTitle title={title} />
      <PostText text={text} />
      <PostFooter vote={vote}/>
    </article>
  );
}
