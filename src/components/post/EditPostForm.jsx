import { Form } from "react-router";
import Button from "../ui/Button.jsx";
import Input from "../ui/Input.jsx";
import Text from "../ui/Text.jsx";
import styles from "../user/SignUpForm.module.css";
import { useState } from "react";

export default function EditPostForm({ onCancel, errors = {}, title, content }) {
  const [postTitle, setPostTitle] = useState(title);
  const [postContent, setPostContent] = useState(content);

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
        onChange={e => setPostTitle(e.target.value)}
      />
      <Text
        {...(errors.content && { error: errors.content })}
        type="text"
        name="content"
        placeholder="Beschreibung *"
        value={postContent}
        onChange={e => setPostContent(e.target.value)}
      />

      {errors?.general && <p className="error">{errors.general}</p>}
      <Button type="submit">Erstellen</Button>
    </Form>
  );
}
