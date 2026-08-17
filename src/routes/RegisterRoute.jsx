import { Link, redirect, useActionData, useNavigate } from "react-router";

import SignUpForm from "../components/user/SignUpForm.jsx";
import { signUp } from "../lib/auth";
import { validateSignIn } from "../lib/validate";
import MetaTags from "../components/MetaTags.jsx";

async function clientAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const { isValid, errors } = validateSignIn(data);
  if (!isValid) {
    return { errors };
  }

  try {
    const res = await signUp(data);

    if (res.error === "Conflict") {
      return { errors: { formError: "Benutzername oder Email Schon vergeben." } };
    }

    return redirect("/login");
  } catch (error) {
    console.error("SignUp Error:", error);
    return { errors: { formError: error.message || "Unbekannter Fehler beim Signup" } };
  }
}
export default function RegisterRoute() {
  const navigate = useNavigate();
  const { errors } = useActionData() ?? {};

  const onCancel = () => {
    return navigate("/");
  };

  return (
    <>
      <MetaTags
        title={"Regristration - Wrodit"}
        description={"Regrister a new account for Wrodit here"}
        url={window.location.href}
      />
      <div className="signup">
        <h1>Registrieren</h1>
        <SignUpForm errors={errors} onCancel={onCancel} />

        <p>
          Schon Wroditor*in? <Link to="/login">Anmelden</Link>
        </p>
      </div>
    </>
  );
}
RegisterRoute.action = clientAction;
