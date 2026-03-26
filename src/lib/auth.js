const URL =
  import.meta.env.MODE === "development" || import.meta.env.MODE === "staging"
    ? "http://xcwkwswkso04gs40k8g48k8w.207.180.221.9.sslip.io"
    : "http://vcg00wk8ws8o0gcc4c8ckkgw.207.180.221.9.sslip.io";

console.log(import.meta.env);

export async function signUp(data) {
  return await fetch(`${URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());
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

export async function fetchhome() {
  return await fetch(`${URL}/home/`);
}
