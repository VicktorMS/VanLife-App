import React from 'react'
import { Outlet } from 'react-router-dom'
import LoadingScreen from '../../../components/LoadingScreen/LoadingScreen'

function Dashboard() {
  return (
   <LoadingScreen/>
  )
}

export default Dashboard