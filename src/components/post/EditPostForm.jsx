import { Form } from "react-router";
import Button from "../ui/Button.jsx";
import Input from "../ui/Input.jsx";
import Text from "../ui/Text.jsx";
import styles from "../user/SignUpForm.module.css";
import { useEffect, useState } from "react";

export default function EditPostForm({ onCancel, errors = {}, title, content }) {
  const [postTitle, setTitle] = useState("");
  const [postContent, setContent] = useState("");

  useEffect(() => {
    setTitle(title); // eslint-disable-line
    setContent(content);
  }, [title, content]);

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
        value={postTitle}
        onChange={e => setTitle(e.target.value)}
      />
      <Text
        {...(errors.content && { error: errors.content })}
        type="text"
        name="content"
        placeholder="Beschreibung *"
        value={postContent}
        onChange={e => setContent(e.target.value)}
      />

      {errors?.general && <p className="error">{errors.general}</p>}
      <Button type="submit">Erstellen</Button>
    </Form>
  );
}
