import React from 'react'
import Header from '../../components/Header'
import DashboardFront from '../../components/DashboardFront'

const Dashboard = ({ sideBarOpen, setSideBarOpen }) => {
  return (
    <div>
      <DashboardFront sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}></DashboardFront>
    </div>
  )
}

export default Dashboard
