import { Form } from "react-router";
import Button from "./Button";
import Input from "./Input";
import Text from "./Text";
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
