import React from "react";
import useFetch from "react-fetch-hook";
import styles from "./GenerateHostVansList.module.css";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { Link } from "react-router-dom";
import { getHostVans } from "../../../api";
import { useLoaderData } from "react-router-dom";


export function loader() {
  return getHostVans();
}

function GenerateHostVansList() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className={styles.cardsContainer}>
      {data.map((vanData) => (
        <VanCard key={vanData.id} data={vanData} />
      ))}
    </div>
  );
}

const VanCard = ({ data }) => {
  const { id, name, price, imageUrl } = data;
  return (
    <Link to={id}>
      <div className={styles.vanCardContainer}>
        <img src={imageUrl} alt={name} />
        <div className={styles.contentWrapper}>
          <p>{name}</p>
          <p>${price}/dia</p>
        </div>
      </div>
    </Link>
  );
};

export default GenerateHostVansList;
