import LogInForm from "../components/LogInForm";
import { Link, redirect, useActionData, useNavigate } from "react-router";
import { signIn } from "../lib/auth";
import { saveSession } from "../lib/session";
import { validateLoginIn } from "../lib/validate";

async function clientAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const { isValid, errors } = validateLoginIn(data);
  if (!isValid) {
    return errors;
  }

  try {
    const res = await signIn(data);

    if (res.status === 401) {
      return { formError: "Benutzername oder Passwort ist falsch." };
    }
    if (!res.accessToken) {
      return { formError: "Benutzername oder Passwort ist falsch." };
    }

    saveSession(res.accessToken);

    return redirect("/");
  } catch (error) {
    console.error("Login Error:", error);

    return { formError: error.message || "Unbekannter Fehler beim Login" };
  }
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
