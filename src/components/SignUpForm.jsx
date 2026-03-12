import { Form } from "react-router";
import Button from "./Button";
import Input from "./Input";

export default function SignUpForm({ onCancel }) {
  return (
    <Form method="post">
      <Input
        label="E-Mail: *"
        type="email"
        name="email"
        placeholder="Gib deine E-Mail ein"
      />
      <Input
        label="Benutzername: *"
        type="text"
        name="username"
        placeholder="Gib dein Benutzernamen ein"
      />
      <Input
        label="Passwort: *"
        type="password"
        name="password"
        placeholder="Gib dein Passwort ein"
      />
        <Button type="submit">Speichern</Button>
        <Button type="button" secondary onClick={onCancel}>
          Abbrechen
        </Button>
    </Form>
  );
}
