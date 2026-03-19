import styles from "./PostInformation.module.css";



export default function PostInformation({name, threadName, createdAt}) {
    return(
        <header className={styles.header}>
        <p>{name}</p>
        <p>{threadName}</p>
        <p>{createdAt}</p>
        </header>
    )
}