import React from "react";
import styles from "./HostVanDetail.module.css";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useParams,
  defer,
  Await,
} from "react-router-dom";
import TypeTag from "../../../components/TypeTag/TypeTag";
import { getHostVans } from "../../../../api";
import { requireAuth } from "../../../../utils";
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen";

export async function loader({ params, request }) {
  await requireAuth(request);
  return defer({ van: getHostVans(params.id) });
}

function HostVanDetail() {
  const linkIsActive = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const dataPromise = useLoaderData();

  function vanDetail(data) {
    const { name, id, imageUrl, price, type } = data;
    return (
      <div className={styles.pageContainer}>
        <Link to=".." relative="path">
          &larr; Back to all vans
        </Link>
        <div className={styles.container}>
          <div className={styles.content}>
            <img src={imageUrl} alt={"Van " + name} />
            <div className={styles.contentText}>
              <TypeTag type={type} />
              <h2 className={styles.mainTitle}>{name}</h2>
              <p>
                <span style={{ fontWeight: "bold" }}>${price}</span>/dia
              </p>
            </div>
          </div>
          <nav>
            <ul className={styles.navList}>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? linkIsActive : null)}
                  end
                  to="."
                >
                  Details
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? linkIsActive : null)}
                  to="pricing"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? linkIsActive : null)}
                  to="photos"
                >
                  Photos
                </NavLink>
              </li>
            </ul>
          </nav>
          <Outlet context={data} />
        </div>
      </div>
    );
  }

  return (
    <React.Suspense fallback={<LoadingScreen/>}>
      <Await resolve={dataPromise.van}>
        {(loadedData) => {
          return vanDetail(loadedData);
        }}
      </Await>
    </React.Suspense>
  );
}

export default HostVanDetail;
