import { useActionData, useNavigate, useLoaderData } from "react-router-dom";
import { useEffect } from "react";

import { fetchCommentById, PatchComment } from "../lib/wrodit";
import EditCommentForm from "../components/comment/EditCommentForm.jsx";

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
    await PatchComment(data, commentId);
    return { success: true };
  } catch (error) {
    console.error("Patch comment error:", error);
    return {
      success: false,
      general: error?.message || "Etwas ist schiefgelaufen",
    };
  }
}
export default function CommentEditRoute() {
  const data = useLoaderData();
  const actionData = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData?.success) {
      navigate(-1);
    }
  }, [actionData, navigate]);

  const onCancel = () => {
    return navigate(-1);
  };

  return (
    <div className="createPost">
      <h1>Bearbeite deinen komentar</h1>
      <EditCommentForm
        errors={actionData ?? {}}
        onCancel={onCancel}
        content={data.commentData.content}
      />
    </div>
  );
}
CommentEditRoute.action = clientAction;
CommentEditRoute.loader = clientLoader;
