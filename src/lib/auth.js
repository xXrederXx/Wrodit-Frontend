const URL = "http://localhost:8080";

export async function signUp(data) {
  const res = await fetch(`${URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const payload = await res.json().catch(() => ({}));

  if (!res.ok) {
    const message = payload?.message || "Bennutzername oder E-Mail adresse schon vergeben";
    const err = new Error(message);
    err.status = res.status;
    throw err;
  }

  return { ...payload, status: res.status };
}

export async function signIn(credentials) {
  const res = await fetch(`${URL}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const payload = await res.json().catch(() => ({}));

  if (!res.ok) {
    const message = payload?.message || "Anmeldung fehlgeschlagen";
    const err = new Error(message);
    err.status = res.status;
    throw err;
  }

  return { ...payload, status: res.status };
}
