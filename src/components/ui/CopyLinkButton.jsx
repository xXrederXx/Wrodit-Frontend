import styles from "../post/PostDetail.module.css";

export default function CopyLinkButton() {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch (err) {
      console.error("Fehler beim Kopieren:", err);
    }
  };

  return (
    <button className={styles.linkButton} onClick={copyToClipboard}>
      Link kopieren
    </button>
  );
}
