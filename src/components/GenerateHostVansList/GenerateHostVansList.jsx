import React from "react";
import useFetch from "react-fetch-hook";
import styles from "./GenerateHostVansList.module.css";
import { Link } from "react-router-dom";

function GenerateHostVansList() {
  const { isLoading, data, error } = useFetch("/api/host/vans");

  if (isLoading) return "Loading...";

  if (error) return "Não foi possível encontrar vans" + error;

  return (
    <div className={styles.cardsContainer}>
      {data.vans.map((vanData) => (
        <VanCard key={vanData.id} data={vanData} />
      ))}
    </div>
  );
}

const VanCard = ({ data }) => {
  const { id, name, price, imageUrl } = data;
  return (
    <Link to={`/host/vans/${id}`}>
      <div className={styles.vanCardContainer}>
        <img src={imageUrl} alt={name}/>
        <div className={styles.contentWrapper}>
            <p>{name}</p>
            <p>${price}/dia</p>
        </div>
      </div>
    </Link>
  );
};

export default GenerateHostVansList;
