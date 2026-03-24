import ThradForm from "../components/ThreadForm";
import { createPost } from "../lib/wrodit";
import { Link, redirect, useActionData, useNavigate } from "react-router";

async function clientAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);



  try {
    const res = await createPost(data);
    console.log("antwort: ", res);
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
    <>
      <h1>CreateThreadRoute</h1>
      <ThradForm errors={errors} onCancel={onCancel} />
    </>
  );
}
CreateThreadRoute.action = clientAction;
