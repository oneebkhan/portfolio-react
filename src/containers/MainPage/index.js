import React from 'react'
import MainPageComponent from '../../components/MainPage'
import SideBar from '../../components/SideBar'

const MainPageContainer = () => {
  return (
    <MainPageComponent image={'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=440&h=220&q=60'} children={[SideBar]}>
      <SideBar></SideBar>
    </MainPageComponent>
  )
}

export default MainPageContainer