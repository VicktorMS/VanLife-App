import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className={styles.introArea}>
        <h2>You got the travel plans, we got the travel vans.</h2>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button>
          <Link to="/vans">Find your Van</Link>
        </button>
      </div>
      <div className={styles.bottom}></div>
    </>
  );
}

export default Home;
