/* eslint-disable react/prop-types */
import React from "react";
import styles from "./GenerateVansCards.module.css";
import useFetch from "react-fetch-hook";
import { Link } from "react-router-dom";
function GenerateVansCards() {
  const { isLoading, error, data } = useFetch("/api/vans");

  if (isLoading) return "Loading...";

  if (error) return "Não foi possível encontrar vans" + error;

  return (
    <ul className={styles.cardsContainer}>
      {data.vans.map((vanData) => (
        <VanCard key={vanData.id} data={vanData} />
      ))}
    </ul>
  );
}

function VanCard({ data }) {
  const { id, name, price, description, imageUrl, type } = data;
  return (
    <li>
      <Link to={`/vans/${id}`} className={styles.cardContainer}>
        <img
          className={styles.cardImage}
          src={imageUrl}
          alt={"Imagem de " + name}
        />
        <div className={styles.cardInfoWrapper}>
          <p className={styles.vanName}>{name}</p>
          <div>
            <p className={styles.vanPrice}>${price}</p>
            <p className={styles.vanDayLabel}>/dia</p>
          </div>
        </div>

        <div className={styles.cardType}>{type}</div>
      </Link>
    </li>
  );
}

export default GenerateVansCards;
