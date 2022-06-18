import React from 'react'
import DashboardFront from '../../components/DashboardFront'

const Dashboard = ({ sideBarOpen, setSideBarOpen }) => {
  return (
    <div>
      <DashboardFront sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}></DashboardFront>
    </div>
  )
}

export default Dashboard
