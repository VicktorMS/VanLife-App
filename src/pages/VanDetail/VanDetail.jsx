import React from "react";
import { useParams, Link, useLocation, useLoaderData, defer, Await } from "react-router-dom";
import styles from "./VanDetail.module.css";
import TypeTag from '../../components/TypeTag/TypeTag'
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { getVan } from "../../../api";


export async function loader({params}) {
  return defer({van: getVan(params.id)})
}

function VanDetail() {
  const dataPromise = useLoaderData()
  
  
  const vanDetail = (data) => {
    const location = useLocation();
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
    )
  }

  return (
    <React.Suspense fallback={<LoadingScreen/>}>
      <Await resolve={dataPromise.van}>
        {loadedData => vanDetail(loadedData)}
      </Await>
    </React.Suspense>
  );
}

export default VanDetail;