import { createComment } from "../lib/wrodit";
import { redirect, useActionData, useNavigate } from "react-router-dom";
import CommentForm from "../components/CommentForm";

async function clientAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const parentId = params.id;
  const postId = params.postId;

  const extendedData = {
    ...data,
    parentId: parentId,
  };
  console.log("exdata", extendedData);

  try {
    const res = await createComment(extendedData);
    console.log("res", res);
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
