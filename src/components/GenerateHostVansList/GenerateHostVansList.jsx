import React from "react";
import useFetch from "react-fetch-hook";
import styles from "./GenerateHostVansList.module.css";
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";



export function loader(){
  return 'Van data Goes Here';
}


function GenerateHostVansList() {
  const { isLoading, data, error } = useFetch("/api/host/vans");

  const loaderData = useLoaderData()

  console.log(loaderData)

  if (isLoading) return <LoadingScreen/>;

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
    <Link to={id}>
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
