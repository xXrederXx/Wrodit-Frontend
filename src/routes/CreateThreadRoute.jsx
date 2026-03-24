import ThradForm from "../components/ThreadForm";
import { createPost } from "../lib/wrodit";
import { redirect, useActionData, useNavigate } from "react-router";
import { validateThread } from "../lib/validate";

async function clientAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const { isValid, errors } = validateThread(data);
  if (!isValid) {
    return errors;
  }

  try {
    const res = await createPost(data);
  } catch (error) {
    try {
      const response = await error.response.json();
      return response;
    } catch (convertError) {
      console.error("Convert Error", convertError);
      throw error;
    }
  }

  return redirect("/");
}

export default function CreateThreadRoute() {
  const navigate = useNavigate();
  const errors = useActionData() ?? {};

  const onCancel = () => {
    return navigate("/");
  };

  return (
    <div className="createThread">
      <h1>Erstelle einen Thread</h1>
      <ThradForm errors={errors} onCancel={onCancel} />
    </div>
  );
}
CreateThreadRoute.action = clientAction;
