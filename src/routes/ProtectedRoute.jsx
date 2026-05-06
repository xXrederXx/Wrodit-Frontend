import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useCurrentUser } from "../lib/session";

export default function ProtectedRoute({ children }) {
  const user = useCurrentUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user !== undefined) {
      setIsLoading(false); // eslint-disable-line
      if (!user) {
        console.warn("User not found, redirecting to login");
        navigate(`/wrodit/login`);
      }
    }
  }, [user, navigate, location]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return children;
}
