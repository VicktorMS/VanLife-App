import React from "react";
import styles from "./GenerateHostVansList.module.css";
import { Link, useLoaderData } from "react-router-dom";
import { requireAuth } from "../../../utils";
import { getHostVans } from "../../../api";

export async function loader({request}) {
  await requireAuth(request)
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
