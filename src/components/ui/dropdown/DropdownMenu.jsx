import React, { useState, useEffect, useRef } from "react";
import styles from "./DropdownMenu.module.css"

export default function DropdownMenu({ children, trigger }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
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
                onClick={() => setIsOpen((open) => !open)}
                aria-haspopup="menu"
                aria-expanded={isOpen}
            >
                {trigger}
            </button>

            {isOpen && (
                <div
                    className={styles.dropdownMenu}
                    role="menu"
                    aria-orientation="vertical"
                >
                    {children}
                </div>
            )}
        </div>
    );
}
