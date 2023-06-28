import React from "react";
import styles from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
import '../../../index.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.logo} to="/">
              <h1>#VANLIFE</h1>
            </Link>
          </li>
          <li className={styles.navLinks}>
            <NavLink className={({isActive}) => isActive ? "activeLink" : null} to="/host">Host</NavLink>
            <NavLink className={({isActive}) => isActive ? "activeLink" : null} to="/about">About</NavLink>
            <NavLink className={({isActive}) => isActive ? "activeLink" : null} to="/vans">Vans</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
