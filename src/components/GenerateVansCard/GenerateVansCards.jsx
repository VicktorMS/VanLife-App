/* eslint-disable react/prop-types */
import React from "react";
import styles from "./GenerateVansCards.module.css";
import useFetch from "react-fetch-hook";
import { Link, useSearchParams } from "react-router-dom";
import TypeTag from "../TypeTag/TypeTag";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
function GenerateVansCards() {
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  const { isLoading, error, data } = useFetch("/api/vans");

  if (isLoading) return <LoadingScreen/>;

  if (error) return "Não foi possível encontrar vans" + error;

  const displayedVans = typeFilter
    ? data.vans.filter((van) => van.type === typeFilter)
    : data.vans;

  return (
    <ul className={styles.cardsContainer}>
      {displayedVans.map((vanData) => (
        <VanCard key={vanData.id} data={vanData} />
      ))}
    </ul>
  );
}


function VanCard({ data }) {
  const { id, name, price, imageUrl, type } = data;
  return (
    <li>
      <Link to={id} className={styles.cardContainer}>
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
          <TypeTag position="absolute" bottom="0" type={type}/>
        </div>
      </Link>
    </li>
  );
}

export default GenerateVansCards;
