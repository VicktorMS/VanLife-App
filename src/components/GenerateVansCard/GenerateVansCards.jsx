/* eslint-disable react/prop-types */
import React from "react";
import styles from "./GenerateVansCards.module.css";
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import TypeTag from "../TypeTag/TypeTag";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { getVans } from "../../../api.js";

export async function loader() {
  const vansPromise = getVans();
  return defer({ vans: vansPromise });
}

function GenerateVansCards() {
  const [searchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  const dataPromise = useLoaderData();

  //Filtering vans data

  return (
    <ul className={styles.cardsContainer}>
      <React.Suspense fallback={<LoadingScreen/>}>
        <Await resolve={dataPromise.vans}>
          {(loadedVans) => {
            const displayedVans = typeFilter
              ? loadedVans.filter((van) => van.type === typeFilter)
              : loadedVans;

            return displayedVans.map((vanData) => (
              <VanCard key={vanData.id} data={vanData} />
            ));
          }}
        </Await>
      </React.Suspense>
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

//Data Handling States
// const [vansData, setVansData] = React.useState([]);
// const [isLoading, setIsLoading] = React.useState(false);
// const [error, setError] = React.useState(null);

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
