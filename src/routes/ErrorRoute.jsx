import { useRouteError , Link } from "react-router";

import { useSession } from "../lib/session";

export default function ErrorRoute() {
  const error = useRouteError();
  console.log(error);

  if (!useSession()) {
    window.location.href = "/wrodit/login"; // eslint-disable-line
    return;
  }

  return (
    <div>
      <h1>Hoppla, da ist etwas schiefgelaufen!</h1>
      <p>Wir bitten um Entschuldigung.</p>
      <Link to={"wrodit/login"}>Melde dich an</Link>
    </div>
  );
}
