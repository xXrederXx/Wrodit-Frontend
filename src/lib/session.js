import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const STORAGE_KEY = "session";
const SESSION_EVENT = "session-changed";

const sessionAtom = atom(getSession());

// Session aus LocalStorage laden
export function getSession() {
  const session = localStorage.getItem(STORAGE_KEY);
  return session ? JSON.parse(session) : null;
}

export function getUserId() {
  return getSession()?.id;
}

export function getPassword() {
  return getSession()?.password;
}

export function saveSession(id, valid, password) {
  if (valid == true) {
    const session = { id, password };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    window.dispatchEvent(new CustomEvent(SESSION_EVENT, { detail: session }));

    return session;
  } else {
    console.error("Passwort oder Benutzer ist falsch!");
  }
}
// Session löschen
export function removeSession() {
  localStorage.removeItem(STORAGE_KEY);

  window.dispatchEvent(new CustomEvent(SESSION_EVENT, { detail: null }));
}
// React Hook für Session
export function useSession() {
  const [session, setSession] = useAtom(sessionAtom);

  useEffect(() => {
    const savedSession = localStorage.getItem(STORAGE_KEY);

    if (savedSession) {
      try {
        setSession(JSON.parse(savedSession));
      } catch (e) {
        console.error(e);
      }
    }

    const handleStorageChange = (event) => {
      if (event.key === STORAGE_KEY) {
        try {
          setSession(event.newValue ? JSON.parse(event.newValue) : null);
        } catch (e) {
          console.error(e);
        }
      }
    };

    const handleCustomSessionChange = (event) => {
      setSession(event.detail);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener(SESSION_EVENT, handleCustomSessionChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(SESSION_EVENT, handleCustomSessionChange);
    };
  }, []);

  return session;
}

// User Hook
export function useCurrentUser() {
  const session = useSession();
  return session?.id;
}
