import SignUpForm from "../components/SignUpForm";

import { Link, redirect, useActionData, useNavigate } from "react-router";
import { signUp } from "../lib/auth";
import { validateSignIn } from "../lib/validate";

async function clientAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const { isValid, errors } = validateSignIn(data);
  if (!isValid) {
    return errors;
  }

  try {
    const res = await signUp(data);

    if (res.error === "Conflict") {

      return { formError: "Benutzername oder Email Schon vergeben." };
    }


    return redirect("/wrodit/login");
  } catch (error) {
    console.error("SignUp Error:", error);
    return { formError: error.message || "Unbekannter Fehler beim Signup" };
  }
}
export default function RegisterRoute() {
  const navigate = useNavigate();
  const errors = useActionData() ?? {};

  const onCancel = () => {
    return navigate("/");
  };

  return (
    <div className="signup">
      <h1>Registrieren</h1>
      <SignUpForm errors={errors} onCancel={onCancel} />
      {errors["email/username"] && <p>{errors["email/username"]}</p>}

      <p>
        Schon Wroditor*in? <Link to="/wrodit/login">Anmelden</Link>
      </p>
    </div>
  );
}
RegisterRoute.action = clientAction;
