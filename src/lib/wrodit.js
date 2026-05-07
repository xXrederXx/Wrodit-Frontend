import { getAuthorizationHeader } from "./session";
import { cachedRequest } from "./apiCache";

const BASE_URL =
  import.meta.env.MODE === "development" || import.meta.env.MODE === "staging" ?
    "http://xcwkwswkso04gs40k8g48k8w.207.180.221.9.sslip.io"
  : "http://vcg00wk8ws8o0gcc4c8ckkgw.207.180.221.9.sslip.io";

export async function fillPostUserAndThread(postsPage, thread = undefined, user = undefined) {
  const posts = await Promise.all(
    postsPage.content.map(async post => {
      return {
        content: post.content,
        title: post.title,
        createdAt: post.createdAt,
        id: post.id,
        thread: thread ?? await fetchThread(post.threadId),
        user: user ?? await fetchUser(post.userId),
        vote: post.vote,
      };
    }),
  );

  return { ...postsPage, content: posts };
}

//user

export async function fetchUser(id, force = false) {
  return await cachedRequest(
    `${BASE_URL}/users/${id}`,
    "GET",
    getAuthorizationHeader(),
    undefined,
    force,
  );
}

export async function fetchAllUserData(force = false) {
  return await cachedRequest(`${BASE_URL}/users/self`, "GET", undefined, undefined, force);
}

export async function deleteUser(force = false) {
  return await cachedRequest(`${BASE_URL}/users/`, "DELETE", undefined, force);
}

//threads

export async function createThread(data) {
  return await cachedRequest(`${BASE_URL}/threads/`, "POST", undefined, data, true);
}

export async function fetchThread(id, force = false) {
  return await cachedRequest(`${BASE_URL}/threads/${id}`, "GET", undefined, undefined, force);
}

export async function fetchUserThreads(force = false) {
  return await cachedRequest(`${BASE_URL}/threads/userfeed`, "GET", undefined, undefined, force);
}

//posts

export async function fetchPosts(force = false) {
  return await cachedRequest(
    `${BASE_URL}/posts/?sort=createdAt,desc`,
    "GET",
    undefined,
    undefined,
    force,
  );
}

export async function createPost(data) {
  return await cachedRequest(`${BASE_URL}/posts/`, "POST", undefined, data, true);
}

export async function fetchPostsByThread(threadId, page = 0, size = 20, force = false) {
  if (!threadId) {throw new Error("threadId wird benötigt");}
  return await cachedRequest(
    `${BASE_URL}/posts/?thread=${threadId}&page=${page}&size=${size}&sort=createdAt,desc`,
    "GET",
    undefined,
    undefined,
    force,
  );
}
export async function fetchPostsByUser(UserId, page = 0, size = 20, force = false) {
  if (!UserId) {throw new Error("UserId wird benötigt");}
  return await cachedRequest(
    `${BASE_URL}/posts/?user=${UserId}&page=${page}&size=${size}&sort=createdAt,desc`,
    "GET",
    undefined,
    undefined,
    force,
  );
}

export async function fetchPostById(id, force = false) {
  return await cachedRequest(`${BASE_URL}/posts/${id}`, "GET", undefined, undefined, force);
}

export async function patchPost(data, id) {
  return await cachedRequest(`${BASE_URL}/posts/${id}`, "PATCH", undefined, data, true);
}

export async function deletePost(id, force = false) {
  return await cachedRequest(`${BASE_URL}/posts/${id}`, "DELETE", undefined, force);
}

//post like

export async function likePost(id, vote = 1) {
  return await cachedRequest(`${BASE_URL}/posts/${id}/vote`, "PUT", undefined, { vote }, true);
}

export async function RemoveLikePost(id, vote = 0) {
  return await likePost(id, vote);
}
export async function DislikeLikePost(id, vote = -1) {
  return await likePost(id, vote);
}

export async function fetchSelfLikesPost(id, force = false) {
  return await cachedRequest(`${BASE_URL}/posts/${id}/vote`, "GET", undefined, undefined, force);
}

// Comments

export async function fetchCommentByPost(postId, page = 0, size = 20, force = false) {
  return await cachedRequest(
    `${BASE_URL}/comments/?post=${postId}&page=${page}&size=${size}`,
    "GET",
    undefined,
    undefined,
    force,
  );
}

export async function fetchCommentByParent(parentId, page = 0, size = 20, force = false) {
  return await cachedRequest(
    `${BASE_URL}/comments/?parent=${parentId}&page=${page}&size=${size}`,
    "GET",
    undefined,
    undefined,
    force,
  );
}

export async function createComment(data) {
  return await cachedRequest(`${BASE_URL}/comments/`, "POST", undefined, data, true);
}

export async function fetchCommentById(id, force = false) {
  return await cachedRequest(`${BASE_URL}/comments/${id}`, "GET", undefined, undefined, force);
}

export async function PatchComment(data, id) {
  return await cachedRequest(`${BASE_URL}/comments/${id}`, "PATCH", undefined, data, true);
}

export async function deleteComment(id, force = false) {
  return await cachedRequest(`${BASE_URL}/comments/${id}`, "DELETE", undefined, force);
}

//comment like

export async function likeComment(id, vote = 1) {
  return await cachedRequest(`${BASE_URL}/comments/${id}/vote`, "PUT", undefined, { vote }, true);
}

export async function RemoveLikeComment(id, vote = 0) {
  return await likeComment(id, vote);
}
export async function DislikeLikeComment(id, vote = -1) {
  return await likeComment(id, vote);
}

export async function fetchSelfLikesComment(id, force = false) {
  return await cachedRequest(`${BASE_URL}/comments/${id}/vote`, "GET", undefined, undefined, force);
}
