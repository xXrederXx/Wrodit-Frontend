import { betterFetch, checkResponse, toFilteredJson } from "./fetchUtil";
import { getAuthorizationHeader } from "./session";

const cache = new Map();

export async function cachedRequest(
  url,
  method,
  headers = {},
  body = undefined,
  force = false,
) {
  const cached = getCache(url);
  if (cached && !force) {
    return cached;
  }

  const requestPromise = (async () => {
    try {
      const res = await betterFetch(
        url,
        method,
        { ...headers, ...getAuthorizationHeader() },
        body,
      );

      checkResponse(res);
      const jsonResponse = await toFilteredJson(res);

      // Replace promise with resolved value
      setCache(url, jsonResponse, 1);

      return jsonResponse;
    } catch (err) {
      // Remove failed request from cache so it can retry
      cache.delete(url);
      throw err;
    }
  })();

  setCache(url, requestPromise);

  return requestPromise;
}

export function setCache(url, data, expirationSeconds = 300) {
  const expTime = Date.now() + expirationSeconds * 1000;

  cache.set(url, { value: data, exp: expTime });
}

export function getCache(url) {
  const now = Date.now();
  const cachedItem = cache.get(url);

  if (!cachedItem) return null;

  if (cachedItem.exp < now) {
    // Expired, remove from cache
    cache.delete(url);
    return null;
  }

  return cachedItem.value;
}

export function cleanCache() {
  const now = Date.now();
  for (const [key, item] of cache) {
    if (item.exp < now) cache.delete(key);
  }
}
