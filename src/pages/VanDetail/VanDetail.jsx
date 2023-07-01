import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import useFetch from "react-fetch-hook";
import styles from "./VanDetail.module.css";
import TypeTag from '../../components/TypeTag/TypeTag'
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

function VanDetail() {
  const params = useParams();
  const location = useLocation();
  const { isLoading, error, data } = useFetch(`/api/vans/${params.id}`);

  if (isLoading) return <LoadingScreen/>;

  if (error) return "Não foi possível encontrar essa Van: " + error;

  const prevSearch = location.state.search && "/?" +  location.state.search
  const type = location.state?.type || "all"

  return (
    <div className={styles.detailContainer}>
       <Link to={`..${prevSearch}`} relative="path">
        &larr; Back to {type} vans
      </Link>
      <img className={styles.vanImage} src={data.vans.imageUrl} alt={"Imagem de " + data.vans.name} />
      <TypeTag type={data.vans.type}/>
      <h2>{data.vans.name}</h2>
      <p><span className={styles.detailPrice}>${data.vans.price}</span>/day</p>
      <p>
        {data.vans.description}
      </p>
      <button>Alugue esta Van</button>
    </div>
  );
}

export default VanDetail;
