import { fetchPostById, patchPost } from "../lib/wrodit";
import { redirect, useActionData, useNavigate, useLoaderData } from "react-router-dom";
import { validatePost } from "../lib/validate";
import EditPostForm from "../components/EditPostForm";

async function clientLoader({ params }) {
  const postId = params.id;
  const postData = await fetchPostById(postId);

  return { postData };
}

async function clientAction({ request, params }) {
  const postId = params.id;

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const { isValid, errors } = validatePost(data);
  if (!isValid) {
    return errors;
  }

  try {
    await patchPost(data, postId);
    return redirect(`/`);
  } catch (error) {
    console.error("Create post error:", error);
    return error?.message || { general: "Etwas ist schiefgelaufen" };
  }
}
export default function EditPostRoute() {
  const data = useLoaderData();

  const navigate = useNavigate();
  const errors = useActionData() ?? {};

  const onCancel = () => {
    return navigate("/");
  };

  return (
    <div className="createPost">
      <h1>Bearbeite deinen Post</h1>
      <EditPostForm
        errors={errors}
        onCancel={onCancel}
        title={data.postData.title}
        content={data.postData.content}
      />
    </div>
  );
}
EditPostRoute.action = clientAction;
EditPostRoute.loader = clientLoader;
