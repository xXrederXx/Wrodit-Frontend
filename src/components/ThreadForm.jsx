import { Form } from "react-router";
import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";
import Text from "./ui/Text.jsx";
import styles from "./SignUpForm.module.css";

export default function ThradForm({ onCancel, errors = {} }) {
  return (
    <Form className={styles.form} method="post">
      <Button type="button" onClick={onCancel}>
        Abbrechen
      </Button>
      <Input
        {...(errors.name && { error: errors.name })}
        type="text"
        name="name"
        placeholder="Benenne deinen Thread *"
      />
      <Text type="text" name="description" placeholder="Beschreibung" />

      {errors?.error && <p className="error">{errors.error}</p>}
      <Button type="submit">Erstellen</Button>
    </Form>
  );
}
