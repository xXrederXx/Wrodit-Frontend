import styles from "./Input.module.css"

export default function Input({ ...props }) {
    return (
        <div className={styles.wrapper}>
            <label>
                <input className={styles.input} {...props} />
            </label>
        </div>
    )
}
