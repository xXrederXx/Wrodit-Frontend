import styles from "./ThreadInformation.module.css";

export default function ThreadInformation({name, description}) {
    return (
        <div className={styles.ThreadInformation}>
            <h1>w/{name}</h1>
            <p>{description}</p>
        </div>
    )
}