import { betterFetch, checkResponse, toFilteredJson } from "./fetchUtil";
import { getAuthorizationHeader } from "./session";

const cache = new Map();

export async function cachedRequest(url, method, headers = {}, body = undefined, force = false) {    
      const cached = getCache(url)
      if(cached && !force)
      {
        return cached;
      }
    
      const res = await betterFetch(url, method, {...headers, ...getAuthorizationHeader()}, body);
      checkResponse(res)
      const jsonResponse = await toFilteredJson(res);
    
      setCache(url, jsonResponse)
      
      return jsonResponse;
}

export function setCache(url, data, expirationSeconds = 300) {
  const expTime = Date.now() + expirationSeconds * 1000;

  cache.set(url, { value: data, exp: expTime });

  console.log("Cache updated:", Array.from(cache.entries()));
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