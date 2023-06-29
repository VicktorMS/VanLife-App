import React from 'react'
import { useOutletContext } from 'react-router-dom'
import styles from './HostVanPricing.module.css'

function HostVanPricing() {
  const [data] = useOutletContext()

  return (
    <p className={styles.container}>
      <span>${data.price},00</span><span>/day</span>
    </p>
  )
}

export default HostVanPricing