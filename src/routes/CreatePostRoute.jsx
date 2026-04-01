import PostForm from "../components/post/PostForm.jsx";
import { createPost } from "../lib/wrodit";
import { redirect, useActionData, useNavigate } from "react-router-dom";
import { validatePost } from "../lib/validate";

async function clientAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const threadId = params.id;

  const { isValid, errors } = validatePost(data);
  if (!isValid) {
    return errors;
  }

  const extendedData = {
    ...data,
    threadId,
  };

  try {
    await createPost(extendedData);
    return redirect(`/`);
  } catch (error) {
    console.error("Create post error:", error);
    return error?.message || { general: "Etwas ist schiefgelaufen" };
  }
}
export default function CreatePostRoute() {
  const navigate = useNavigate();
  const errors = useActionData() ?? {};

  const onCancel = () => {
    return navigate("/");
  };

  return (
    <div className="createPost">
      <h1>Create a Post</h1>
      <PostForm errors={errors} onCancel={onCancel} />
    </div>
  );
}
CreatePostRoute.action = clientAction;
