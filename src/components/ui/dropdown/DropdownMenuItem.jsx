import styles from "./DropdownMenuItem.module.css"

export default function DropdownMenuItem({ children, onClick, active = false }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={active ? styles.buttonActive : styles.button}
            role="menuitem"
        >
            {children}
        </button>
    );
}