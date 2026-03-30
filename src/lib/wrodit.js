import { filterContent } from "./filterUtil";
import { getJWTToken } from "./session";

const URL =
  import.meta.env.MODE === "development" || import.meta.env.MODE === "staging"
    ? "http://xcwkwswkso04gs40k8g48k8w.207.180.221.9.sslip.io"
    : "http://vcg00wk8ws8o0gcc4c8ckkgw.207.180.221.9.sslip.io";

async function toFilteredJson(res) {
  const obj = await res.json();
  return filterContent(obj);
}

//user

export async function fetchUser(id) {
  const session = getJWTToken();
  const headers = session ? { Authorization: `Bearer ${session}` } : {};
  const res = await fetch(`${URL}/users/${id}`, { headers });

  if (!res.ok) {
    throw new Error("Fehler beim Laden der User");
  }

  return await toFilteredJson(res);
}
export async function fetchAllUserData() {
  const session = getJWTToken();
  const headers = session ? { Authorization: `Bearer ${session}` } : {};
  const res = await fetch(`${URL}/users/self`, { headers });

  if (!res.ok) {
    throw new Error("Fehler beim Laden der UserDaten");
  }

  return await toFilteredJson(res);
}

//threads

export async function createThread(data) {
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
    throw await toFilteredJson(res);
  }

  return await toFilteredJson(res);
}

export async function fetchThreadsById(id) {
  const session = getJWTToken();

  const headers = session ? { Authorization: `Bearer ${session}` } : {};

  const res = await fetch(`${URL}/threads/${id}`, { headers });

  if (!res.ok) {
    throw await toFilteredJson(res);
  }

  return await toFilteredJson(res);
}

export async function fetchThread(id) {
  const session = getJWTToken();
  const headers = session ? { Authorization: `Bearer ${session}` } : {};
  const res = await fetch(`${URL}/threads/${id}`, { headers });

  if (!res.ok) {
    throw new Error("Fehler beim Laden des Threads");
  }

  return await toFilteredJson(res);
}

//posts

export async function fetchPosts() {
  const session = getJWTToken();

  const headers = session ? { Authorization: `Bearer ${session}` } : {};

  const res = await fetch(`${URL}/posts/`, { headers });

  if (!res.ok) {
    throw new Error("Fehler beim Laden der Posts");
  }

  return await toFilteredJson(res);
}

export async function createPost(data) {
  const session = getJWTToken();
  const headers = {
    "Content-Type": "application/json",
    ...(session && { Authorization: `Bearer ${session}` }),
  };

  const res = await fetch(`${URL}/posts/`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw res;
  }

  return await toFilteredJson(res);
}

export async function fetchPostsByThread(threadId, page = 1, size = 20) {
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

  return toFilteredJson(response);
}
export async function fetchPostsByUser(UserId, page = 1, size = 20) {
  const session = getJWTToken();

  if (!UserId) throw new Error("UserId wird benötigt");

  const params = new URLSearchParams();
  const headers = session ? { Authorization: `Bearer ${session}` } : {};

  params.append("page", JSON.stringify({ page, size }));
  params.append("user", UserId);

  const response = await fetch(`${URL}/posts/?${params.toString()}`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new Error("Fehler beim Laden der Posts");
  }

  return toFilteredJson(response);
}

export async function fetchPostById(id) {
  const session = getJWTToken();
  const headers = session ? { Authorization: `Bearer ${session}` } : {};
  const res = await fetch(`${URL}/posts/${id}`, { headers });

  if (!res.ok) {
    throw new Error("Fehler beim Laden des post");
  }

  return await toFilteredJson(res);
}

export async function PatchPost(data, id) {
  const session = getJWTToken();
  const headers = {
    "Content-Type": "application/json",
    ...(session && { Authorization: `Bearer ${session}` }),
  };

  const res = await fetch(`${URL}/posts/${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw res;
  }

  return await toFilteredJson(res);
}

// Comments

export async function fetchCommentByPost(postId) {
  const session = getJWTToken();

  const headers = session ? { Authorization: `Bearer ${session}` } : {};

  const query = new URLSearchParams({
    post: postId,
    page: 0,
    size: 20,
  });

  const response = await fetch(`${URL}/comments/?${query}`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new Error("Fehler beim Laden der Posts");
  }

  return response.json();
}

export async function fetchCommentByParent(parentId) {
  const session = getJWTToken();

  const headers = session ? { Authorization: `Bearer ${session}` } : {};

  const query = new URLSearchParams({
    parent: parentId,
    page: 0,
    size: 10,
  });

  const response = await fetch(`${URL}/comments/?${query}`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new Error("Fehler beim Laden der Posts");
  }

  return response.json();
}

export async function createComment(data) {
  const session = getJWTToken();
  const headers = {
    "Content-Type": "application/json",
    ...(session && { Authorization: `Bearer ${session}` }),
  };

  const res = await fetch(`${URL}/comments/`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw res;
  }

  return await res.json();
}
