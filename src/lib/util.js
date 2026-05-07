/**
 * Checks if a string is null, undefined, empty, or only whitespace.
 * @param {any} str - The value to check.
 * @returns {boolean} - True if blank or null, false otherwise.
 */
export function isBlankOrNull(str) {
  return str === null || str === undefined || String(str).trim() === "";
}

/**
 * Checks if value is NOT null, undefined, or empty.
 */
export function isPresent(value) {
  return !isBlankOrNull(value);
}

/**
 * Checks if value is a valid number.
 */
export function isValidNumber(value) {
  return !Number.isNaN(value) && Number.isFinite(value);
}

/**
 * Checks if value is a valid email.
 */
export function isValidEmail(email) {
  if (isBlankOrNull(email)) {
    return false;
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Checks if value is a valid URL.
 */
export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function timeAgo(createdAt) {
  const now = new Date();
  const postDate = new Date(createdAt);
  const diffMs = now - postDate; // Differenz in Millisekunden

  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHours = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSec < 60) {
    return `${diffSec} Sekunden`;
  }
  if (diffMin < 60) {
    return `${diffMin} Minuten`;
  }
  if (diffHours < 24) {
    return `${diffHours} Stunden`;
  }
  return `${diffDays} Tagen`;
}
