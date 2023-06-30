import React from "react";
import styles from "./TypeTag.module.css";

const typeColor = { simple: "#E17654", rugged: "#115E59", luxury: "#161616" };

const TypeTag = ({ type, position, bottom }) => {
  return (
    <div
      style={{ backgroundColor: typeColor[type], position, bottom  }}
      className={styles.container}
    >
      {type}
    </div>
  );
};

export default TypeTag;
