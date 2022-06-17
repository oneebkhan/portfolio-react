import React from 'react'
import Header from '../../components/Header'

const Dashboard = ({ sideBarOpen, setSideBarOpen }) => {
  return (
    <Header sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}></Header>
  )
}

export default Dashboard
