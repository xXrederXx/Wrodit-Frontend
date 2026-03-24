import PostForm from "../components/PostForm";
import { createPost } from "../lib/wrodit";
import { redirect, useActionData, useNavigate } from "react-router";
import { validateThread } from "../lib/validate";

async function clientAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const threadId = params.id;

  const extendedData = {
    ...data,
    threadId,
  };
  console.log("exdata", extendedData);

  try {
    const res = await createPost(extendedData);
    console.log("res", res);
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
