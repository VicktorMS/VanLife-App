import React from 'react'
import styles from './HostVanDetail.module.css'
import { Link, NavLink, useParams } from 'react-router-dom'
import useFetch from 'react-fetch-hook'

function HostVanDetail() {

  const { id: paramID } = useParams()

  const {isLoading, data, error} = useFetch(`/api/host/vans/${paramID}`)

  if (isLoading) return "Loading...";

  if (error) return "Não foi possível encontrar essa Van" + error;

  const {name, id, imageUrl, price, type} = data.vans[0]

  return (
    <div className={styles.pageContainer}>
      <Link to='..' relative="path">&larr; Back to all vans</Link>
      <div className={styles.container}>
        <div className={styles.content}>
          <img src={imageUrl} alt={"Van " + name} />
          <div className={styles.contentText}>
            <div>{type}</div>
            <h2 className={styles.mainTitle}>{name}</h2>
            <p><span style={{fontWeight: 'bold'}}>${price}</span>/dia</p>
          </div>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li><NavLink>Details</NavLink></li>
            <li><NavLink>Pricing</NavLink></li>
            <li><NavLink>Photos</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HostVanDetail