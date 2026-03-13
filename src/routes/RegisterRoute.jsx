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
    console.log(res);
    
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
