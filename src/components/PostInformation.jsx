import styles from "./PostInformation.module.css";


export default function PostInformation({name, threadId, createdAt}) {
    return(
        <header className={styles.header}>
        <p>{name}</p>
        <p>{threadId}</p>
        <p>{createdAt}</p>
        </header>
    )
}