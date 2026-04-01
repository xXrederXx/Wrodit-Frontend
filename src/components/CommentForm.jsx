import { Form } from "react-router";
import Button from "./ui/Button.jsx";
import Text from "./ui/Text.jsx";
import styles from "./SignUpForm.module.css";

export default function CommentForm({ onCancel, errors = {} }) {
  return (
    <Form className={styles.form} method="post">
      <Button type="button" onClick={onCancel}>
        Abbrechen
      </Button>

      <Text
        {...(errors.content && { error: errors.content })}
        type="text"
        name="content"
        placeholder="Komentiere *"
      />

      {errors?.general && <p className="error">{errors.general}</p>}
      <Button type="submit">Komentieren</Button>
    </Form>
  );
}
