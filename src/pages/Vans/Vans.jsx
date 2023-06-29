import React from "react";
import styles from "./Vans.module.css";
import GenerateVansCards from "../../components/GenerateVansCard/GenerateVansCards";
import { Link } from "react-router-dom";

function Vans() {
  return (
    <div className={styles.vansContainer}>
      <h2>Descubra novas experiências</h2>
      <div>
        <Link to="?type=simple">
          simples
        </Link>
        <Link to="?type=rugged">
          rugged
        </Link>
        <Link to="?type=luxury">
          luxury
        </Link>
        <Link to=".">
          clear
        </Link>
      </div>
      <GenerateVansCards />
    </div>
  );
}

export default Vans;
