import { getAuthorizationHeader, getJWTToken } from "./session";
import { betterFetch, checkResponse, toFilteredJson } from "./fetchUtil";

const URL =
  import.meta.env.MODE === "development" || import.meta.env.MODE === "staging"
    ? "http://xcwkwswkso04gs40k8g48k8w.207.180.221.9.sslip.io"
    : "http://vcg00wk8ws8o0gcc4c8ckkgw.207.180.221.9.sslip.io";



//user

export async function fetchUser(id) {
  const res = await betterFetch(`${URL}/users/${id}`, "GET", getAuthorizationHeader());
  checkResponse(res, "Fehler beim Laden der User")
  return await toFilteredJson(res);
}

export async function fetchAllUserData() {
  const res = await betterFetch(`${URL}/users/self`, "GET", getAuthorizationHeader());
  checkResponse(res, "Fehler beim Laden der UserDaten");
  return await toFilteredJson(res);
}

//threads

export async function createThread(data) {
  const res = await betterFetch(`${URL}/threads/`, "POST", getAuthorizationHeader(), data)
  checkResponse(res)
  return await toFilteredJson(res);
}

export async function fetchThread(id) {
  const res = await betterFetch(`${URL}/threads/${id}`, "GET", getAuthorizationHeader());
  checkResponse(res,"Fehler beim Laden des Threads")
  return await toFilteredJson(res);
}

//posts

export async function fetchPosts() {
  const res = await betterFetch(`${URL}/posts/`, "GET", getAuthorizationHeader());
  checkResponse(res,"Fehler beim Laden der Posts")
  return await toFilteredJson(res);
}

export async function createPost(data) {
  const res = await betterFetch(`${URL}/threads/${id}`, "POST", getAuthorizationHeader(), data);
  checkResponse(res)
  return await toFilteredJson(res);
}

export async function fetchPostsByThread(threadId, page = 1, size = 20) {
  if (!threadId) throw new Error("threadId wird benötigt");
  const response = await betterFetch(`${URL}/posts/?thread=${threadId}&page=${page}&size=${size}`, "GET", getAuthorizationHeader())
  checkResponse(response,"Fehler beim Laden der Posts")
  return await toFilteredJson(response);
}
export async function fetchPostsByUser(UserId, page = 1, size = 20) {
  if (!UserId) throw new Error("UserId wird benötigt");
  const response = await betterFetch(`${URL}/posts/?user=${UserId}&page=${page}&size=${size}`, "GET", getAuthorizationHeader())
  checkResponse(response,"Fehler beim Laden der Posts")
  return await toFilteredJson(response);
}

export async function fetchPostById(id) {
  const res = await betterFetch(`${URL}/posts/${id}`, "GET", getAuthorizationHeader());
  checkResponse(res,"Fehler beim Laden des post")
  return await toFilteredJson(res);
}

export async function PatchPost(data, id) {
  const res = await betterFetch(`${URL}/posts/${id}`, "PATCH", getAuthorizationHeader(), data)
  checkResponse(res);
  return await toFilteredJson(res);
}

//post like

export async function likePost(id, vote = 1) {
  const res = await betterFetch(`${URL}/posts/${id}/vote`, "PUT", getAuthorizationHeader(), {vote});
  checkResponse(res);
  return await toFilteredJson(res);
}

export async function RemoveLikePost(id, vote = 0) {
  return likePost(id, vote);
}
export async function DislikeLikePost(id, vote = -1) {
  return likePost(id, vote);
}

export async function fetchSelfLikesPost(id) {
  const res = await fetch(`${URL}/posts/${id}/vote`, "GET", getAuthorizationHeader());
  checkResponse(res, "Fehler beim Laden der likes")
  return await toFilteredJson(res);
}

// Comments

export async function fetchCommentByPost(postId, page = 0, size = 20) {
  const response = await betterFetch(`${URL}/comments/?post=${postId}&page=${page}&size=${size}`, "GET", getAuthorizationHeader())
  checkResponse(response,"Fehler beim Laden der Posts")
  return await toFilteredJson(response);
}

export async function fetchCommentByParent(parentId) {
  const response = await betterFetch(`${URL}/comments/?parent=${parentId}&page=${page}&size=${size}`, "GET", getAuthorizationHeader())
  checkResponse(response,"Fehler beim Laden der Posts")
  return await toFilteredJson(response);
}

export async function createComment(data) {
  const res = await betterFetch(`${URL}/comments/`,  "POST", getAuthorizationHeader(), data);
  checkResponse(res);
  return await toFilteredJson(res);
}

export async function fetchCommentById(id) {
  const res = await betterFetch(`${URL}/comments/${id}`, "GET", getAuthorizationHeader());
  checkResponse(res,"Fehler beim Laden des post")
  return await toFilteredJson(res);
}

export async function PatchComment(data, id) {
  const res = await betterFetch(`${URL}/comments/${id}`, "PATCH", getAuthorizationHeader(), data);
  checkResponse(res);
  return await toFilteredJson(res);
}
