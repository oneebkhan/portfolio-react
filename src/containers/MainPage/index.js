import React from 'react'
import MainPageComponent from '../../components/MainPage'
import SideBar from '../../components/SideBar'

const MainPageContainer = ({sideBarOpen = false, setSideBarOpen}) => {
  return (
    <MainPageComponent children={[<SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>]}>
      <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}></SideBar>
    </MainPageComponent>
  )
}

export default MainPageContainer