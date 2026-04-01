import { fetchCommentById, PatchComment } from "../lib/wrodit";
import { redirect, useActionData, useNavigate, useLoaderData } from "react-router-dom";
import EditCommentForm from "../components/EditCommentForm";

async function clientLoader({ params }) {
  const commentId = params.id;
  const commentData = await fetchCommentById(commentId);

  return { commentData };
}

async function clientAction({ request, params }) {
  const commentId = params.id;

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const res = await PatchComment(data, commentId);
    return redirect(`/wrodit/post/1`);
  } catch (error) {
    console.error("Create post error:", error);
    return error?.message || { general: "Etwas ist schiefgelaufen" };
  }
}
export default function CommentEditRoute() {
  const data = useLoaderData();

  const navigate = useNavigate();
  const errors = useActionData() ?? {};

  const onCancel = () => {
    return navigate(-1);
  };

  return (
    <div className="createPost">
      <h1>Bearbeite deinen komentar</h1>
      <EditCommentForm errors={errors} onCancel={onCancel} content={data.commentData.content} />
    </div>
  );
}
CommentEditRoute.action = clientAction;
CommentEditRoute.loader = clientLoader;
