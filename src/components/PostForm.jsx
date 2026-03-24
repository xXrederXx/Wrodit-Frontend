import { Form } from "react-router";
import Button from "./Button";
import Input from "./Input";
import Text from "./Text";
import styles from "./SignUpForm.module.css";

export default function PostForm({ onCancel, errors = {} }) {
  return (
    <Form className={styles.form} method="post">
      <Button type="button" onClick={onCancel}>
        Abbrechen
      </Button>
      <Input
        {...(errors.username && { error: errors.username })}
        type="text"
        name="title"
        placeholder="Stelle deine Frage *"
      />
      <Text
        {...(errors.password && { error: errors.password })}
        type="text"
        name="description"
        placeholder="Beschreibung"
      />

      {errors?.error && <p className="error">{errors.error}</p>}
      <Button type="submit">Erstellen</Button>
    </Form>
  );
}
