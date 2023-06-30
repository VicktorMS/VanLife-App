import React from "react";
import styles from "./LoadingScreen.module.css";

function LoadingScreen() {
  return (
    <div className={styles.container}>
      <div className={styles.loadingContent}> Loading...</div>
    </div>
  );
}

export default LoadingScreen;
