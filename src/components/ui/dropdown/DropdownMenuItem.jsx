import styles from "./DropdownMenuItem.module.css";

export default function DropdownMenuItem({ children, onClick, closeMenu, active = false }) {
  const handleClick = e => {
    onClick?.(e);
    closeMenu?.();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={active ? styles.buttonActive : styles.button}
      role="menuitem">
      {children}
    </button>
  );
}
