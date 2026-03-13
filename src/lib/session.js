
export function saveSession(session) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session))
    window.dispatchEvent(new CustomEvent(SESSION_EVENT, { detail: session }))
}
