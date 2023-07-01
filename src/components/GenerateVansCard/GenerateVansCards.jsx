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

  //Data Handling States
  // const [vansData, setVansData] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);

  const typeFilter = searchParams.get("type");

  const { isLoading, error, data } = useFetch("/api/vans");


  // React.useEffect(() => {
  //   async function loadVans() {
  //     setIsLoading(true);
  //     try {
  //       const data = await getVans(); //function called from api.js
  //       setVansData(data);
  //     } 
  //     catch (err) {
  //       console.log("Error",err); // doesn't catch any errors
  //       setError(err);
  //     } 
  //     finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   loadVans();
  // }, []);

  
  //If is loading show Loading component
  if (isLoading) return <LoadingScreen />;

  //If there is any error, show this message 
  if (error) return <h1>Não foi possível encontrar vans: {error.message}</h1>;


  //Filtering vans data
  const displayedVans = typeFilter
    ? data.vans.filter((van) => van.type === typeFilter)
    : data.vans;

  //If there is no error and loading is complete, map the components
  //Should not be rendered if there is no data or error
  return (
    <ul className={styles.cardsContainer}>

      {displayedVans?.map((vanData) => (
        <VanCard key={vanData.id} data={vanData} />
      ))}

      {console.log("Error " + error) /*checking if there is any errors*/}
      {console.log("Data " + data)}
    </ul>
  );
}



// Card component
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
