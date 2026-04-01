import { Form } from "react-router";
import Button from "../ui/Button.jsx";
import Input from "../ui/Input.jsx";
import styles from "./SignUpForm.module.css";

export default function SignUpForm({ onCancel, errors = {} }) {
  return (
    <Form className={styles.form} method="post">
      <Button type="button" onClick={onCancel}>
        Abbrechen
      </Button>
      <Input
        {...(errors.email && { error: errors.email })}
        type="email"
        name="email"
        placeholder="E-Mail *"
      />
      <Input
        {...(errors.username && { error: errors.username })}
        type="text"
        name="username"
        placeholder="Benutzernamen *"
      />
      <Input
        {...(errors.password && { error: errors.password })}
        type="password"
        name="password"
        placeholder="Passwort *"
      />
      {errors?.formError && <p className="error">{errors.formError}</p>}
      <Button type="submit">Registrieren</Button>
    </Form>
  );
}
