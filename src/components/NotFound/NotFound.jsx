import React from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className={styles.container}>
      <h2>Sorry, the page you were looking for was not found</h2>
      <Link to='/'><button>Return to Home</button></Link>
    </div>
  );
}

export default NotFound;
