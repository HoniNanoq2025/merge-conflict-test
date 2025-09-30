import React from "react";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://youtu.be/dQw4w9WgXcQ?si=F8SxRFI2pWo_ENns" target="_blank" rel="noopener noreferrer" className={styles.link}>
        <p className={styles.text}>© 2024 Our Company</p>
      </a>
    </footer>
  );
}