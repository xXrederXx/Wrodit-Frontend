import { getCache, setCache } from "./apiCache";
import { betterFetch } from "./fetchUtil";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

if (!BASE_URL) {
  console.error("NO URL FOUND!!! Have you set the env variable??");
}

const currentFetches = new Map();

async function getCacheOrFetch(url, method = "GET", body = undefined) {
  const key = `${method} ${url} ${JSON.stringify(body)}`;
  const cached = getCache(key);
  if (cached) {
    return cached;
  }

  const current = currentFetches.get(key);
  if (current) {
    return current;
  }

  const fetchPromise = (async () => {
    try {
      const res = await betterFetch(url, method, undefined, body);
      return await setCache(key, res);
    } finally {
      currentFetches.delete(key);
    }
  })();

  currentFetches.set(key, fetchPromise);

  return fetchPromise;
}

export async function fillPostUserAndThread(postsPage, thread = undefined, user = undefined) {
  const posts = await Promise.all(
    postsPage.content.map(async post => {
      return {
        content: post.content,
        title: post.title,
        createdAt: post.createdAt,
        id: post.id,
        thread: thread ?? (await fetchThread(post.threadId)),
        user: post.user,
        vote: post.vote,
      };
    }),
  );

  return { ...postsPage, content: posts };
}

//user

export async function fetchUser(id) {
  return await getCacheOrFetch(`${BASE_URL}/users/${id}`);
}

export async function fetchAllUserData() {
  return await getCacheOrFetch(`${BASE_URL}/users/self`);
}

export async function deleteUser() {
  return await getCacheOrFetch(`${BASE_URL}/users/`, "DELETE");
}

//threads

export async function createThread(data) {
  return await getCacheOrFetch(`${BASE_URL}/threads/`, "POST", data);
}

export async function fetchThread(id) {
  return await getCacheOrFetch(`${BASE_URL}/threads/${id}`);
}

export async function fetchUserThreads() {
  return await getCacheOrFetch(`${BASE_URL}/threads/userfeed`);
}

//posts

export async function fetchPosts() {
  return await getCacheOrFetch(`${BASE_URL}/posts/?sort=createdAt,desc`);
}

export async function createPost(data) {
  return await getCacheOrFetch(`${BASE_URL}/posts/`, "POST", data);
}

export async function fetchPostsByThread(threadId, page = 0, size = 20) {
  if (!threadId) {
    throw new Error("threadId wird benötigt");
  }
  return await getCacheOrFetch(
    `${BASE_URL}/posts/?thread=${threadId}&page=${page}&size=${size}&sort=createdAt,desc`,
  );
}
export async function fetchPostsByUser(UserId, page = 0, size = 20) {
  if (!UserId) {
    throw new Error("UserId wird benötigt");
  }
  return await getCacheOrFetch(
    `${BASE_URL}/posts/?user=${UserId}&page=${page}&size=${size}&sort=createdAt,desc`,
  );
}

export async function fetchPostById(id) {
  return await getCacheOrFetch(`${BASE_URL}/posts/${id}`);
}

export async function patchPost(data, id) {
  return await getCacheOrFetch(`${BASE_URL}/posts/${id}`, "PATCH", data);
}

export async function deletePost(id) {
  return await getCacheOrFetch(`${BASE_URL}/posts/${id}`, "DELETE");
}

//post like

export async function likePost(id, vote = 1) {
  return await getCacheOrFetch(`${BASE_URL}/posts/${id}/vote`, "PUT", { vote });
}

export async function fetchSelfLikesPost(id) {
  return await getCacheOrFetch(`${BASE_URL}/posts/${id}/vote`);
}

// Comments

export async function fetchCommentByPost(postId, page = 0, size = 20) {
  return await getCacheOrFetch(`${BASE_URL}/comments/?post=${postId}&page=${page}&size=${size}`);
}

export async function fetchCommentByParent(parentId, page = 0, size = 20) {
  return await getCacheOrFetch(
    `${BASE_URL}/comments/?parent=${parentId}&page=${page}&size=${size}`,
  );
}

export async function createComment(data) {
  return await getCacheOrFetch(`${BASE_URL}/comments/`, "POST", data);
}

export async function fetchCommentById(id) {
  return await getCacheOrFetch(`${BASE_URL}/comments/${id}`);
}

export async function PatchComment(data, id) {
  return await getCacheOrFetch(`${BASE_URL}/comments/${id}`, "PATCH", data);
}

export async function deleteComment(id) {
  return await getCacheOrFetch(`${BASE_URL}/comments/${id}`, "DELETE");
}

//comment like

export async function likeComment(id, vote = 1) {
  return await getCacheOrFetch(`${BASE_URL}/comments/${id}/vote`, "PUT", { vote });
}

export async function fetchSelfLikesComment(id) {
  return await getCacheOrFetch(`${BASE_URL}/comments/${id}/vote`);
}
