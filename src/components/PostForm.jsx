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
        {...(errors.title && { error: errors.title })}
        type="text"
        name="title"
        placeholder="Dein Post *"
      />
      <Text
        {...(errors.content && { error: errors.content })}
        type="text"
        name="content"
        placeholder="Beschreibung *"
      />

      {errors?.general && <p className="error">{errors.general}</p>}
      <Button type="submit">Erstellen</Button>
    </Form>
  );
}
