import React from "react";
import { Link } from "react-router-dom";
import styles from "./HostNavbar.module.css";

function HostNavbar() {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/host/">DashBoard</Link>
          </li>
          <li>
            <Link to="/host/income">Income</Link>
          </li>
          {/* <li><Link to="/host/vans">Vans</Link></li> */}
          <li>
            <Link to="/host/reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HostNavbar;
