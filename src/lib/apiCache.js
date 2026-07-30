const cache = new Map();

/*
 * Takes the response, adds it to cache and returns the json
 */
export async function setCache(url, response) {
  const data = await response.json();

  const cacheControl = response.headers.get("Cache-Control");
  if (!cacheControl) {
    console.warn("No Cache-Control headers found", response);
    return data;
  }

  if (/\bno-store\b/i.test(cacheControl)) {
    return data;
  }

  const matchMaxAge = cacheControl.match(/max-age=(\d+)/i);
  if (!matchMaxAge) {
    console.warn("No max-age found, but no-store was not set", response);
    return data;
  }

  const expirationMS = Number(matchMaxAge[1]) * 1000;

  cache.set(url, { value: data, exp: Date.now() + expirationMS });
  return data;
}

export function getCache(url) {
  const now = Date.now();
  const cachedItem = cache.get(url);

  if (!cachedItem) {
    return null;
  }

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
    if (item.exp < now) {
      cache.delete(key);
    }
  }
}
