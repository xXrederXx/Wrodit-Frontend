import { useEffect } from "react";

import { cleanCache } from "../lib/apiCache";

const BackgroundCacheCleaner = () => {
  useEffect(() => {
    const id = setInterval(cleanCache, 60_000);
    return () => clearInterval(id);
  });
  return null;
};

export default BackgroundCacheCleaner;
