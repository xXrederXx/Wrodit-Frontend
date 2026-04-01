import { isBlankOrNull, isValidEmail } from "./util";

export function validateSignIn(data) {
  const errors = {};
  let isValid = true;

  if (isBlankOrNull(data.email)) {
    isValid = false;
    errors.email = "Email darf nicht leer sein";
  }
  if (!isValidEmail(data.email)) {
    isValid = false;
    errors.email = "Email muss dem Email format entsprechen";
  }
  if (isBlankOrNull(data.username)) {
    isValid = false;
    errors.username = "Bennutzername darf nicht leer sein";
  }
  if (isBlankOrNull(data.password)) {
    isValid = false;
    errors.password = "Passwort darf nicht leer sein";
  } else if (data.password.length < 8) {
    isValid = false;
    errors.password = "Passwort muss mehr als 8 Zeichen haben";
  } else if (!/[A-Z]/.test(data.password)) {
    isValid = false;
    errors.password = "Passwort muss Mindestens einen Grossbuchstaben beinhalten";
  } else if (!/[a-z]/.test(data.password)) {
    isValid = false;
    errors.password = "Passwort muss Mindestens einen Kleinbuchstaben beinhalten";
  } else if (!/[0-9]/.test(data.password)) {
    isValid = false;
    errors.password = "Passwort muss Mindestens eine Zahl beinhalten";
  } else if (!/[^a-zA-Z0-9]/.test(data.password)) {
    isValid = false;
    errors.password = "Passwort muss Sonderzeichen beinhalten";
  }

  return { isValid: isValid, errors };
}

export function validateLoginIn(data) {
  const errors = {};
  let isValid = true;

  if (isBlankOrNull(data.username)) {
    isValid = false;
    errors.username = "Bennutzername darf nicht leer sein";
  }
  if (isBlankOrNull(data.password)) {
    isValid = false;
    errors.password = "Passwort darf nicht leer sein";
  } else if (data.password.length < 8) {
    isValid = false;
    errors.password = "Passwort muss mehr als 8 Zeichen haben";
  } else if (!/[A-Z]/.test(data.password)) {
    isValid = false;
    errors.password = "Passwort muss Mindestens einen Grossbuchstaben beinhalten";
  } else if (!/[a-z]/.test(data.password)) {
    isValid = false;
    errors.password = "Passwort muss Mindestens einen Kleinbuchstaben beinhalten";
  } else if (!/[0-9]/.test(data.password)) {
    isValid = false;
    errors.password = "Passwort muss Mindestens eine Zahl beinhalten";
  } else if (!/[^a-zA-Z0-9]/.test(data.password)) {
    isValid = false;
    errors.password = "Passwort muss Sonderzeichen beinhalten";
  }

  return { isValid: isValid, errors };
}

export function validateThread(data) {
  const errors = {};
  let isValid = true;

  if (isBlankOrNull(data.name)) {
    isValid = false;
    errors.name = "Name des Threads dasf nicht leer sein";
  }
  return { isValid: isValid, errors };
}
export function validatePost(data) {
  const errors = {};
  let isValid = true;

  if (isBlankOrNull(data.title)) {
    isValid = false;
    errors.title = "Name des Post dasf nicht leer sein";
  }

  if (isBlankOrNull(data.content)) {
    isValid = false;
    errors.content = "Der Post mus einen Inhalt haben";
  }
  return { isValid: isValid, errors };
}
