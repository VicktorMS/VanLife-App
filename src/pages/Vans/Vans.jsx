import React from "react";
import styles from "./Vans.module.css";
import GenerateVansCards from "../../components/GenerateVansCard/GenerateVansCards";

function Vans() {
  return (
    <div className={styles.vansContainer}>
      <h2>Descubra novas experiências</h2>
      <GenerateVansCards />
    </div>
  );
}

export default Vans;
