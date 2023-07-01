/* eslint-disable react/prop-types */
import React from "react";
import styles from "./GenerateVansCards.module.css";
import useFetch from "react-fetch-hook";
import { Link, useSearchParams } from "react-router-dom";
import TypeTag from "../TypeTag/TypeTag";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { getVans } from "../../../api";

function GenerateVansCards() {
  const [searchParams] = useSearchParams();
  
  const [vansData, setVansData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const typeFilter = searchParams.get("type");

  // const { isLoading, error, data } = useFetch("/api/vans");
  React.useEffect(() => {
    async function loadVans() {
      setIsLoading(true)
      const data = await getVans();
      setVansData(data);
      setIsLoading(false);
    }
    loadVans();
  }, []);

  if (isLoading) return <LoadingScreen />

  // if (error) return "Não foi possível encontrar vans" + error;

  const displayedVans = typeFilter
    ? vansData.filter((van) => van.type === typeFilter)
    : vansData;


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
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  return (
    <li>
      <Link
        to={id}
        state={{ search: searchParams.toString(), type: typeFilter }}
        className={styles.cardContainer}
      >
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
          <TypeTag position="absolute" bottom="0" type={type} />
        </div>
      </Link>
    </li>
  );
}

export default GenerateVansCards;
