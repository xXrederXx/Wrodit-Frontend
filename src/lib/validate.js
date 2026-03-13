import { isBlankOrNull } from "./util";

export function validateSignIn(data) {
  const errors = {};
  let isValid = true;

  if (isBlankOrNull(data.email)) {
    isValid = false;
    errors.email = "Email darf nicht leer sein";
  }
  if (isBlankOrNull(data.password)) {
    isValid = false;
    errors.password = "Passwort darf nicht leer sein";
  } else if (data.password.length < 8) {
    isValid = false;
    errors.password = "Passwort muss mehr als 8 Zeichen haben";
  }

  return { isValid: isValid, errors };
}

export function validateChronicle(chronicle) {
  const errors = {
    title: "",
    text: "",
  };

  let isValid = true;

  if (chronicle.title.trim().length === 0) {
    errors.title = "Titel darf nicht leer sein";
    isValid = false;
  }

  if (chronicle.text.trim().length === 0) {
    errors.text = "Text darf nicht leer sein";
    isValid = false;
  }

  return { errors, isValid };
}
