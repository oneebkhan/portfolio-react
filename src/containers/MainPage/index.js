import React from 'react'
import MainPageComponent from '../../components/MainPage'
import SideBar from '../../components/SideBar'

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
    </MainPageComponent>
  )
}

export default MainPageContainer
