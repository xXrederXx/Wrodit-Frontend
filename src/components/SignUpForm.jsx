import { Form } from "react-router";
import Button from "./Button";
import Input from "./Input";
import styles from "./SignUpForm.module.css"


export default function SignUpForm({ onCancel }) {
  return (
    <Form className={styles.form} method="post">
      <Button type="button" onClick={onCancel}>
        Abbrechen
      </Button>
      <Input
        type="email"
        name="email"
        placeholder="E-Mail *"
      />
      <Input
        type="text"
        name="username"
        placeholder="Benutzernamen *"
      />
      <Input
        type="password"
        name="password"
        placeholder="Passwort *"
      />
      <Button type="submit">Registrieren</Button>
    </Form>
  );
}
