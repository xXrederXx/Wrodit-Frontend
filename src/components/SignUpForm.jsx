import { Form } from "react-router";
import Button from "./Button";
import Input from "./Input";
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
      <Button type="submit">Registrieren</Button>
    </Form>
  );
}
