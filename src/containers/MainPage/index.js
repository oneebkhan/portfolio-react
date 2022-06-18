import React from 'react'
import MainPageComponent from '../../components/MainPage'
import SideBar from '../../components/SideBar'
import Dashboard from '../../containers/Dashboard'

const MainPageContainer = ({
  sideBarOpen = false,
  setSideBarOpen,
  video,
  setVideo
}) => {
  return (
    <MainPageComponent>
      <SideBar
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
        video={video}
        setVideo={setVideo}
      ></SideBar>
      <Dashboard
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
      ></Dashboard>
    </MainPageComponent>
  )
}

export default MainPageContainer
