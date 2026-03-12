import SignUpForm from "../components/SignUpForm";
import { Link } from "react-router-dom";

export default function RegisterRoute() {
  return (
    <div className="signup">
      <h1>Registrieren</h1>
      <SignUpForm />
      <p>Schon Wroditor*in? <Link to="/wrodit/login">Anmelden</Link></p>
    </div>
  );
}
