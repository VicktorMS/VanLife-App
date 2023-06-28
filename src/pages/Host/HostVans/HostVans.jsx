import React from 'react'
import styles from './HostVans.module.css'
import GenerateHostVansList from '../../../components/GenerateHostVansList/GenerateHostVansList'

function HostVans() {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Suas vans</h2>
      <GenerateHostVansList/>
    </div>
  )
}

export default HostVans