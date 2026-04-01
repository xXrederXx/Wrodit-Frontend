import { useState } from "react";
import styles from "../post/PostDetail.module.css";

export default function CopyLinkButton() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => setShowPopup(!showPopup);

  const url = window.location.href;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button className={styles.linkButton} onClick={togglePopup}>
        Link anzeigen
      </button>

      {showPopup && (
        <div className={styles.popup}>
          <div>
            <span>{url}</span>
            <button onClick={() => setShowPopup(false)}>x</button>
          </div>
        </div>
      )}
    </div>
  );
}
