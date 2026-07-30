import { filterContent } from "./filterUtil";
import { getAuthorizationHeader } from "./session.js";

/**
 * Throws if the response is not OK
 * @param {*} response the fetch response
 * @param {*} errorMessage a custom error message appended
 * @returns nothing
 */
export function checkResponse(response, errorMessage = "") {
  if (response.ok) {
    return response;
  }
  throwFetchResponseError(response, errorMessage);
}

/**
 * Converts response into a json with filtered bad words
 * @param {*} response
 * @returns
 */
export async function toFilteredJson(response) {
  if (typeof response !== "object" || !response || response.status === 204) {
    return response;
  }
  const jsonData = await response.json();
  return filterContent(jsonData);
}

/**
 * A better fetch method. Automaticaly applys a content type json header if a body is provided
 * body is also automaticaly convertet to json. It also adds the jwt and checks the response
 * @param {*} url
 * @param {*} method
 * @param {*} headers
 * @param {*} body
 * @returns
 */
export async function betterFetch(url, method = "GET", headers = {}, body = undefined) {
  const payload = { method, headers };
  if (body) {
    payload.body = JSON.stringify(body);
    payload.headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  payload.headers = { ...payload.headers, ...getAuthorizationHeader() };
  const response = await fetch(url, payload);
  checkResponse(response);
  return response;
}

async function throwFetchResponseError(response, msg = "") {
  let body = "";
  try {
    body = JSON.stringify(await response.clone().json());
  } catch {
    try {
      body = await response.clone().text();
    } catch {
      console.warn("Could not read json or text form response, while trying to throw");
    }
  }
  throw new Error(
    `
    Fetch failed for ${response.url}
    HTTP ${response.status} ${response.statusText}
    RESPONSE ${body}
    DEV MESSAGE: ${msg}`,
  );
}
