import { Form } from "react-router";
import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";
import styles from "./SignUpForm.module.css";

export default function LogInForm({ onCancel, errors = {} }) {
  return (
    <Form className={styles.form} method="post">
      <Button type="button" onClick={onCancel}>
        Abbrechen
      </Button>
      <Input
        {...(errors.username && { error: errors.username })}
        type="text"
        name="username"
        placeholder="Benutzername *"
      />
      <Input
        {...(errors.password && { error: errors.password })}
        type="password"
        name="password"
        placeholder="Passwort *"
      />
      <Input type="hidden" name="email" value="fillerValue" />
      {errors?.formError && <p className="error">{errors.formError}</p>}
      <Button type="submit">Anmelden</Button>
    </Form>
  );
}
