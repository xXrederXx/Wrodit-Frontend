import { getAuthorizationHeader } from "./session";
import { betterFetch, checkResponse, toFilteredJson } from "./fetchUtil";
import { cachedRequest, getCache, setCache } from "./apiCache";

const BASE_URL =
  import.meta.env.MODE === "development" || import.meta.env.MODE === "staging"
    ? "http://xcwkwswkso04gs40k8g48k8w.207.180.221.9.sslip.io"
    : "http://vcg00wk8ws8o0gcc4c8ckkgw.207.180.221.9.sslip.io";



//user

export async function fetchUser(id, force = false) {
  return cachedRequest(`${BASE_URL}/users/${id}`, "GET", getAuthorizationHeader(), undefined, force);
}

export async function fetchAllUserData(force = false) {
  return cachedRequest(`${BASE_URL}/users/self`, "GET", undefined, undefined, force);
}

//threads

export async function createThread(data, force = false) {
  return cachedRequest(`${BASE_URL}/threads/`, "POST", undefined, data, force);
}

export async function fetchThread(id, force = false) {
  return cachedRequest(`${BASE_URL}/threads/${id}`, "GET", undefined, undefined, force);
}

//posts

export async function fetchPosts(force = false) {
  return cachedRequest(`${BASE_URL}/posts/`, "GET", undefined, undefined, force);
}

export async function createPost(data, force = false) {
  return cachedRequest(`${BASE_URL}/posts`, "POST", undefined, data, force);

}

export async function fetchPostsByThread(threadId, page = 1, size = 20, force = false) {
  if (!threadId) throw new Error("threadId wird benötigt");
  return cachedRequest(`${BASE_URL}/posts/?thread=${threadId}&page=${page}&size=${size}`, "GET", undefined, undefined, force);
}
export async function fetchPostsByUser(UserId, page = 1, size = 20, force = false) {
  if (!UserId) throw new Error("UserId wird benötigt");
  return cachedRequest(`${BASE_URL}/posts/?user=${UserId}&page=${page}&size=${size}`, "GET", undefined, undefined, force);
}

export async function fetchPostById(id, force = false) {
  return cachedRequest(`${BASE_URL}/posts/${id}`, "GET", undefined, undefined, force);
}

export async function PatchPost(data, id, force = false) {
  return cachedRequest(`${BASE_URL}/posts/${id}`, "PATCH", undefined, data, force);
}

//post like

export async function likePost(id, vote = 1, force = false) {
  return cachedRequest(`${BASE_URL}/posts/${id}`, "PATCH", undefined, {vote}, force);
}

export async function RemoveLikePost(id, vote = 0) {
  return likePost(id, vote);
}
export async function DislikeLikePost(id, vote = -1) {
  return likePost(id, vote);
}

export async function fetchSelfLikesPost(id, force = false) {
  return cachedRequest(`${BASE_URL}/posts/${id}/vote`, "GET", undefined, undefined, force);
}

// Comments

export async function fetchCommentByPost(postId, page = 0, size = 20, force = false) {
  return cachedRequest(`${BASE_URL}/comments/?post=${postId}&page=${page}&size=${size}`, "GET", undefined, undefined, force);
}

export async function fetchCommentByParent(parentId, page = 0, size = 20, force = false) {
  return cachedRequest(`${BASE_URL}/comments/?parent=${parentId}&page=${page}&size=${size}`, "GET", undefined, undefined, force);
}

export async function createComment(data, force = false) {
  return cachedRequest(`${BASE_URL}/comments/`,  "POST", undefined, data, force);
}

export async function fetchCommentById(id, force = false) {
  return cachedRequest(`${BASE_URL}/comments/${id}`, "GET", undefined, undefined, force);
}

export async function PatchComment(data, id, force = false) {
  return cachedRequest(`${BASE_URL}/comments/${id}`, "PATCH", undefined, data, force);
}
