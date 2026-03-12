import SignUpForm from "../components/SignUpForm";
import { Link } from "react-router-dom";

export default function RegisterRoute() {
  return (
    <>
      <h1>RegisterRoute</h1>
      <SignUpForm />
      <Link to="/wrodit/login">Schon Wroditor*in? Anmelden</Link>
    </>
  );
}
