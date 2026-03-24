import { getJWTToken } from "./session";

const URL =
  import.meta.env.MODE === "development" || import.meta.env.MODE === "staging"
    ? "http://xcwkwswkso04gs40k8g48k8w.207.180.221.9.sslip.io"
    : "http://vcg00wk8ws8o0gcc4c8ckkgw.207.180.221.9.sslip.io";

export async function fetchPosts() {
  const session = getJWTToken();

  const headers = session ? { Authorization: `Bearer ${session}` } : {};

  const res = await fetch(`${URL}/posts/`, { headers });

  if (!res.ok) {
    throw new Error("Fehler beim Laden der Posts");
  }

  return await res.json();
}

export async function fetchThread(id) {
  const session = getJWTToken();
  const headers = session ? { Authorization: `Bearer ${session}` } : {};
  const res = await fetch(`${URL}/threads/${id}`, { headers });

  if (!res.ok) {
    throw new Error("Fehler beim Laden des Threads");
  }

  return await res.json();
}

export async function fetchUser(id) {
  const session = getJWTToken();
  const headers = session ? { Authorization: `Bearer ${session}` } : {};
  const res = await fetch(`${URL}/users/${id}`, { headers });

  if (!res.ok) {
    throw new Error("Fehler beim Laden der User");
  }

  return await res.json();
}

export async function createPost(data) {
  const session = getJWTToken();
  const headers = session ? { Authorization: `Bearer ${session}` } : {};
  return await fetch(
    `${URL}/threads/`,
    { headers },
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    },
  ).then((res) => res.json());
}
