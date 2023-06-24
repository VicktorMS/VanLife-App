import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/">
              <h1>#VANLIFE</h1>
            </Link>
          </li>
          <li className={styles.navLinks}>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
