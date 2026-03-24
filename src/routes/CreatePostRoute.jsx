import PostForm from "../components/PostForm";
import { createPost } from "../lib/wrodit";
import { redirect, useActionData, useNavigate } from "react-router";
import { validateThread } from "../lib/validate";

async function clientAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const url = new URL(request.url);
  const pathParts = url.pathname.split("/");

  const threadId = pathParts[4];

  const extendedData = {
    ...data,
    threadId,
  };
  console.log("exdata",extendedData);
  

  const { isValid, errors } = validateThread(extendedData);
  if (!isValid) {
    return errors;
  }

  try {
    const res = await createPost(data);
    console.log("res",res);
  } catch (error) {
    return error;
  }

  return redirect(`/wrodit/thread/${threadId}`);
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
