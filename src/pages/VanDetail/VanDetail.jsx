import React from "react";
import { useParams, Link, useLocation, useLoaderData } from "react-router-dom";
import useFetch from "react-fetch-hook";
import styles from "./VanDetail.module.css";
import TypeTag from '../../components/TypeTag/TypeTag'
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { getVans } from "../../../api";
import { requireAuth } from "../../../utils";


export async function loader({params}) {
  return getVans(params.id)
}

function VanDetail() {
  const params = useParams();
  // const params = useParams();
  const location = useLocation();

  const data = useLoaderData()

  const prevSearch = location.state.search && "/?" +  location.state.search
  const type = location.state?.type || "all"

  return (
    <div className={styles.detailContainer}>
       <Link to={`..${prevSearch}`} relative="path">
        &larr; Back to {type} vans
      </Link>
      <img className={styles.vanImage} src={data?.imageUrl} alt={"Imagem de " + data.name} />
      <TypeTag type={data.type}/>
      <h2>{data.name}</h2>
      <p><span className={styles.detailPrice}>${data.price}</span>/day</p>
      <p>
        {data.description}
      </p>
      <button>Alugue esta Van</button>
    </div>
  );
}

export default VanDetail;