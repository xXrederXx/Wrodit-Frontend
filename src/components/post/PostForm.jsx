import { Form } from "react-router";

import Button from "../ui/Button.jsx";
import Input from "../ui/Input.jsx";
import Text from "../ui/Text.jsx";
import styles from "../user/SignUpForm.module.css";

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
