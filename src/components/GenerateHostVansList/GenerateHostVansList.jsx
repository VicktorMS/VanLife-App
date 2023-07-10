import React from "react";
import styles from "./GenerateHostVansList.module.css";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { requireAuth } from "../../../utils";
import { getHostVans } from "../../../api";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ hostVans: getHostVans() });
}

function GenerateHostVansList() {
  const dataPromise = useLoaderData();

  return (
    <div className={styles.cardsContainer}>
      <React.Suspense fallback={<LoadingScreen />}>
        <Await resolve={dataPromise.hostVans}>
          {(loadedData) => {
            return loadedData.map((vanData) => (
              <VanCard key={vanData.id} data={vanData} />
            ));
          }}
        </Await>
      </React.Suspense>
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
