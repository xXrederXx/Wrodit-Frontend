import { Form } from "react-router";
import Button from "./ui/Button.jsx";
import Text from "./ui/Text.jsx";
import styles from "./SignUpForm.module.css";
import { useState, useEffect } from "react";

export default function EditCommentForm({ onCancel, errors = {}, content }) {
  const [postContent, setContent] = useState("");

  useEffect(() => {
    setContent(content);
  }, [content]);

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
        value={postContent}
        onChange={e => setContent(e.target.value)}
      />

      {errors?.general && <p className="error">{errors.general}</p>}
      <Button type="submit">Komentieren</Button>
    </Form>
  );
}
