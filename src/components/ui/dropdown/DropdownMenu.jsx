import React, { useState, useEffect, useRef, cloneElement, Children } from "react";
import styles from "./DropdownMenu.module.css";

export default function DropdownMenu({ children, trigger }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        type="button"
        className={styles.dropdownTrigger}
        onClick={() => setIsOpen(open => !open)}
        aria-haspopup="menu"
        aria-expanded={isOpen}>
        {trigger}
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu} role="menu" aria-orientation="vertical">
          {Children.map(children, child =>
            cloneElement(child, {
              closeMenu: () => setIsOpen(false),
            }),
          )}
        </div>
      )}
    </div>
  );
}
