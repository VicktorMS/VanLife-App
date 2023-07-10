import React from 'react'
import { useOutletContext } from 'react-router-dom'
import styles from './HostVanPhotos.module.css'


function HostVanPhotos() {
  const data = useOutletContext()
  return (
    <div className={styles.container}>
      <img src={data.imageUrl} alt={data.name}/>
    </div>
  )
}

export default HostVanPhotos