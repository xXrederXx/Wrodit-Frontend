import { Filter } from "bad-words";

const filter = new Filter({ placeHolder: "♥" });

export function filterContent(obj) {
  if (obj === undefined || obj === null) {
    return null;
  }
  if (typeof obj === "object") {
    Object.keys(obj).forEach(key => {
      obj[key] = filterContent(obj[key]);
    });
  }
  return typeof obj === "string" ? filter.clean(obj) : obj;
}
