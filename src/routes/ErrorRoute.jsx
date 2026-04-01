import { useRouteError } from "react-router";
import { Link } from "react-router";
import { useCurrentUser } from "../lib/session";

export default function ErrorRoute() {
  const error = useRouteError();
  console.error(error, useCurrentUser());
  
  if(!useCurrentUser().user)
  {
    window.location.href = "/wrodit/login"
    return
  }

  return (
    <div>
      <h1>Hoppla, da ist etwas schiefgelaufen!</h1>
      <p>Wir bitten um Entschuldigung.</p>
      <Link to={"wrodit/login"}>Melde dich an</Link>
    </div>
  );
}
