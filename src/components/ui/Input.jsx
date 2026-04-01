import styles from "./Input.module.css";

export default function Input({ error, ...props }) {
  return (
    <div className={styles.wrapper}>
      <label>
        <input className={styles.input} {...props} />
        {error && <p className={styles.error}>{error}</p>}
      </label>
    </div>
  );
}
