import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import GenerateHostVansList from "../../../components/GenerateHostVansList/GenerateHostVansList";

function Dashboard() {
  return (
    <>
      <section className={styles.hostDashboardEarnings}>
        <div className={styles.info}>
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className={styles.hostDashboardReviews}>
        <h2>Review score</h2>
        {/* <BsStarFill className={styles.star" /> }*/}
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section className={styles.vansContainer}>
        <div className={styles.info}>
          <h2>Your Vans</h2>
          <Link to="vans">See More</Link>
        </div>
        <GenerateHostVansList />
      </section>
    </>
  );
}

export default Dashboard;
