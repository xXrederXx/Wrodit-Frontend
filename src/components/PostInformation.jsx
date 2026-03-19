import styles from "./PostInformation.module.css";


export default function PostInformation({userId, threadId, createdAt}) {
    return(
        <header className={styles.header}>
        <p>{userId}</p>
        <p>{threadId}</p>
        <p>{createdAt}</p>
        </header>
    )
}