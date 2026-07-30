import { getCache, setCache } from "./apiCache";
import { betterFetch } from "./fetchUtil";

const BASE_URL = "http://localhost:8080";

async function getCacheOrFetch(url, method = "GET", body = undefined) {
  const cached = getCache(url);
  if (cached) {
    return cached;
  }
  const res = await betterFetch(url, method, undefined, body);
  return await setCache(url, res);
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
        user: user ?? (await fetchUser(post.userId)),
        vote: post.vote,
      };
    }),
  );

  return { ...postsPage, content: posts };
}

//user

export async function fetchUser(id, force = false) {
  return await getCacheOrFetch(`${BASE_URL}/users/${id}`);
}

export async function fetchAllUserData(force = false) {
  return await getCacheOrFetch(`${BASE_URL}/users/self`);
}

export async function deleteUser(force = false) {
  return await getCacheOrFetch(`${BASE_URL}/users/`, "DELETE");
}

//threads

export async function createThread(data) {
  return await getCacheOrFetch(`${BASE_URL}/threads/`, "POST", data);
}

export async function fetchThread(id, force = false) {
  return await getCacheOrFetch(`${BASE_URL}/threads/${id}`);
}

export async function fetchUserThreads(force = false) {
  return await getCacheOrFetch(`${BASE_URL}/threads/userfeed`);
}

//posts

export async function fetchPosts(force = false) {
  return await getCacheOrFetch(`${BASE_URL}/posts/?sort=createdAt,desc`);
}

export async function createPost(data) {
  return await getCacheOrFetch(`${BASE_URL}/posts/`, "POST", data);
}

export async function fetchPostsByThread(threadId, page = 0, size = 20, force = false) {
  if (!threadId) {
    throw new Error("threadId wird benötigt");
  }
  return await getCacheOrFetch(
    `${BASE_URL}/posts/?thread=${threadId}&page=${page}&size=${size}&sort=createdAt,desc`,
  );
}
export async function fetchPostsByUser(UserId, page = 0, size = 20, force = false) {
  if (!UserId) {
    throw new Error("UserId wird benötigt");
  }
  return await getCacheOrFetch(
    `${BASE_URL}/posts/?user=${UserId}&page=${page}&size=${size}&sort=createdAt,desc`,
  );
}

export async function fetchPostById(id, force = false) {
  return await getCacheOrFetch(`${BASE_URL}/posts/${id}`);
}

export async function patchPost(data, id) {
  return await getCacheOrFetch(`${BASE_URL}/posts/${id}`, "PATCH", data);
}

export async function deletePost(id, force = false) {
  return await getCacheOrFetch(`${BASE_URL}/posts/${id}`, "DELETE");
}

//post like

export async function likePost(id, vote = 1) {
  return await getCacheOrFetch(`${BASE_URL}/posts/${id}/vote`, "PUT", { vote });
}

export async function RemoveLikePost(id, vote = 0) {
  return await likePost(id, vote);
}
export async function DislikeLikePost(id, vote = -1) {
  return await likePost(id, vote);
}

export async function fetchSelfLikesPost(id, force = false) {
  return await getCacheOrFetch(`${BASE_URL}/posts/${id}/vote`);
}

// Comments

export async function fetchCommentByPost(postId, page = 0, size = 20, force = false) {
  return await getCacheOrFetch(`${BASE_URL}/comments/?post=${postId}&page=${page}&size=${size}`);
}

export async function fetchCommentByParent(parentId, page = 0, size = 20, force = false) {
  return await getCacheOrFetch(
    `${BASE_URL}/comments/?parent=${parentId}&page=${page}&size=${size}`,
  );
}

export async function createComment(data) {
  return await getCacheOrFetch(`${BASE_URL}/comments/`, "POST", data);
}

export async function fetchCommentById(id, force = false) {
  return await getCacheOrFetch(`${BASE_URL}/comments/${id}`);
}

export async function PatchComment(data, id) {
  return await getCacheOrFetch(`${BASE_URL}/comments/${id}`, "PATCH", data);
}

export async function deleteComment(id, force = false) {
  return await getCacheOrFetch(`${BASE_URL}/comments/${id}`, "DELETE");
}

//comment like

export async function likeComment(id, vote = 1) {
  return await getCacheOrFetch(`${BASE_URL}/comments/${id}/vote`, "PUT", { vote });
}

export async function RemoveLikeComment(id, vote = 0) {
  return await likeComment(id, vote);
}
export async function DislikeLikeComment(id, vote = -1) {
  return await likeComment(id, vote);
}

export async function fetchSelfLikesComment(id, force = false) {
  return await getCacheOrFetch(`${BASE_URL}/comments/${id}/vote`);
}
