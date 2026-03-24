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
  const headers = {
    "Content-Type": "application/json",
    ...(session && { Authorization: `Bearer ${session}` }),
  };

  const res = await fetch(`${URL}/threads/`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw await res.json();
  }

  return await res.json();
}

export async function fetchThreadsById(id) {
  const session = getJWTToken();

  const headers = session ? { Authorization: `Bearer ${session}` } : {};

  const res = await fetch(`${URL}/threads/${id}`, { headers });

  if (!res.ok) {
    throw await res.json();
  }

  return await res.json();
}

export async function fetchPostsByThread(threadId, page = 1, size = 10) {
  const session = getJWTToken();

  if (!threadId) throw new Error("threadId wird benötigt");

  const params = new URLSearchParams();
  const headers = session ? { Authorization: `Bearer ${session}` } : {};

  params.append("page", JSON.stringify({ page, size }));
  params.append("thread", threadId);

  const response = await fetch(`${URL}/posts/?${params.toString()}`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new Error("Fehler beim Laden der Posts");
  }

  return response.json();
}
