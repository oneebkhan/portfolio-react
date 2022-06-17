import React, { useState } from 'react'
import MainPageContainer from '../../containers/MainPage'
import Dashboard from '../../containers/Dashboard'

const MainPage = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [video, setVideo] = useState('Fruit.mp4')

  return (
    <div>
      <MainPageContainer
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
        video={video}
        setVideo={setVideo}
      />
      <Dashboard
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
      ></Dashboard>
    </div>
  )
}

export default MainPage
