import React, { useState } from 'react'
import MainPageContainer from '../../containers/MainPage'

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
    </div>
  )
}

export default MainPage
