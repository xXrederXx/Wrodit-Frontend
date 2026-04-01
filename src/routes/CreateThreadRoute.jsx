import ThradForm from "../components/thread/ThreadForm.jsx";
import { createThread } from "../lib/wrodit";
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
    await createThread(data);
  } catch (error) {
    return error;
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
