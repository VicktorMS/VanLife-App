import React from 'react'
import { useOutletContext } from 'react-router-dom'
import styles from './HostVanInfo.module.css'

function HostVanInfo() {
  const [data] = useOutletContext()
  return (
      <ul className={styles.containerList}>
        <li><span>Name:</span>{data.name}</li>
        <li><span>Category:</span>{data.type}</li>
        <li><span>Description:</span>{data.description}</li>
        <li><span>Visibility:</span>Public</li>
      </ul>
  )
}

export default HostVanInfo