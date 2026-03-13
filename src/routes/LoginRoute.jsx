import LogInForm from "../components/LogInForm";
import { Link, redirect, useActionData, useNavigate } from "react-router";
import { userValidate } from "../lib/auth/";
import { saveId } from "../lib/session";

async function clientAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const res = await userValidate(data);
    const result = await res.json();

    saveId(result.id, result.valid);
  } catch (error) {
    try {
      const response = await error.response.json();
      return response;
    } catch (convertError) {
      //convertError can be ignored as it only throws when there is an unexpected different original error
      console.error("Convert Error", convertError);
      throw error;
    }
  }

  return redirect("/");
}

export default function LoginRoute() {
  const navigate = useNavigate();
  const errors = useActionData();

  const onCancel = () => {
    return navigate("/");
  };

  return (
    <div className="signup">
      <h1>Anmelden</h1>

      <LogInForm errors={errors} onCancel={onCancel} />

      <p>
        Noch kein Konto <Link to="/wrodit/register">Registrieren</Link>
      </p>
    </div>
  );
}
LoginRoute.action = clientAction;

// validate user gives back true or false, save data in localstorage and send back when neededys
