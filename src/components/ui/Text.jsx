import styles from "./Text.module.css";

export default function Text({ error, ...props }) {
  return (
    <div className={styles.wrapper}>
      <label>
        <textarea className={styles.input} {...props} />
        {error && <p className={styles.error}>{error}</p>}
      </label>
    </div>
  );
}
