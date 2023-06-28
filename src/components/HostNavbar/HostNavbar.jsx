import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HostNavbar.module.css";

function HostNavbar() {
  const linkIsActive = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink
              end //Previne esse link fique ativo quando em um rota diferente
              style={({ isActive }) => (isActive ? linkIsActive : null)}
              to="/host/"
            >
              DashBoard
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? linkIsActive : null)}
              to="/host/income"
            >
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? linkIsActive : null)}
              to="/host/reviews"
            >
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? linkIsActive : null)}
              to="/host/vans"
            >
              Vans
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HostNavbar;
