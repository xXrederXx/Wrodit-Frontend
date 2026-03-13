/**
 * Checks if a string is null, undefined, empty, or only whitespace.
 * @param {any} str - The value to check.
 * @returns {boolean} - True if blank or null, false otherwise.
 */
export function isBlankOrNull(str) {
    return str === null || str === undefined || String(str).trim() === '';
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
    if (isBlankOrNull(email)) return false;
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