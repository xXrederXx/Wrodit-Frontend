import styles from "./Input.module.css"

export default function Input({ label, ...props }) {
    return (
        <div className={styles.wrapper}>
            <label className={styles.label}>
                {label}
                <input className={styles.input} {...props} />
            </label>
        </div>
    )
}
