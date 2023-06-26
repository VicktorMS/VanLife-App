import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "react-fetch-hook";
import styles from "./VanDetail.module.css";

function VanDetail() {
  const params = useParams();
  const { isLoading, error, data } = useFetch(`/api/vans/${params.id}`);

  if (isLoading) return "Loading...";

  if (error) return "Não foi possível encontrar essa Van: " + error;


  return (
    <main className={styles.detailContainer}>
      <img className={styles.vanImage} src={data.vans.imageUrl} alt={"Imagem de " + data.vans.name} />
      <div className={styles.vanType}>
        {data.vans.type}
      </div>
      <h2>{data.vans.name}</h2>
      <p><span className={styles.detailPrice}>${data.vans.price}</span>/day</p>
      <p>
        {data.vans.description}
      </p>
      <button>Alugue esta Van</button>
    </main>
  );
}

export default VanDetail;
