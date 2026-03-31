import { filterContent } from "./filterUtil";

export async function checkResponse(response, errorMessage = "") {
  if (response.ok) {
    return response;
  }
  throwFetchResponseError(response, errorMessage);
}

export async function toFilteredJson(res) {
    if(typeof res !== "object" || !res)
    {
        return res;
    }
  const obj = await res.json();
  return filterContent(obj);
}

export async function betterFetch(
  url,
  method = "GET",
  headers = {},
  body = undefined,
) {
  const payload = { method, headers };

  if (body) {
    payload.body = JSON.stringify(body);
    payload.headers = { 
      "Content-Type": "application/json", 
      ...headers 
    };
  }

  return await fetch(url, payload);
}

async function throwFetchResponseError(response, msg = "") {
  let body = "";
  try {
    body = JSON.stringify(await response.clone().json());
  } catch {
    try {
      body = await response.clone().text();
    } catch {
      console.warn(
        "Could not read json or text form response, while trying to throw",
      );
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
