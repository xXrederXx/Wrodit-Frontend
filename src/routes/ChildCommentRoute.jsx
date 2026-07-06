import { redirect, useActionData, useNavigate } from "react-router-dom";

import { createComment } from "../lib/wrodit";
import CommentForm from "../components/comment/CommentForm.jsx";

async function clientAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const parentId = params.id;
  const postId = params.postId;

  const extendedData = {
    ...data,
    parentId: parentId,
  };

  try {
    await createComment(extendedData);
    return redirect(`/wrodit/post/${postId}`);
  } catch (error) {
    console.error("Create post error:", error);
    return error?.message || { general: "Etwas ist schiefgelaufen" };
  }
}
export default function ChildCommentRoute() {
  const navigate = useNavigate();
  const errors = useActionData() ?? {};

  const onCancel = () => {
    navigate(-1);
  };

  return (
    <div className="createPost">
      <h1>Komentiere</h1>
      <CommentForm errors={errors} onCancel={onCancel} />
    </div>
  );
}
ChildCommentRoute.action = clientAction;
