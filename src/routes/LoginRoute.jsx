import LogInForm from "../components/LogInForm";
import { Link, redirect, useActionData, useNavigate } from "react-router";
import { signIn } from "../lib/auth";
import { saveSession } from "../lib/session";

async function clientAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const res = await signIn(data);
    console.log(res);
    

    saveSession(res.accessToken);
  } catch (error) {
    try {
      const response = await error.response.json();
      return response;
    } catch (error) {
    console.error("Login Error:", error);
    return { error: error.message || "Unbekannter Fehler beim Login" };
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