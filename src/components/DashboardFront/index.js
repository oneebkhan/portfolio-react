import React from 'react'
import { MainDashboardComponent, BottomText, StyledVideo, BottomTextDescription, StyledButton } from './styles'
import { Spacer } from '../SideBar/style'
import Header from '../Header'
import { useNavigate } from 'react-router'

const DashboardFront = ({sideBarOpen, setSideBarOpen}) => {
  const video = document.getElementById("vid2")
  const navigate = useNavigate()
  
  return (
    <MainDashboardComponent>
        <StyledVideo
          autoPlay="autoplay"
          muted
          loop
          id='vid2'
          isOpened={true}
          fadeVideo={false}
        >
          <source type='video/mp4' src="Coffee.mp4"/>
        </StyledVideo>
        <Header sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}></Header>
      <BottomText>
      Indulgence
        <BottomTextDescription>by ayesha </BottomTextDescription>
        <div>
          <Spacer multiply='0.3'></Spacer>
          <StyledButton onClick={()=>{navigate('/recipes')}}>Explore Recipes</StyledButton>
        </div>
      </BottomText>
      <div>
      wned
      </div>
      <div>
      wned
      </div>
      <div>
      wned
      </div>
      <div>
      wned
      </div>
      <div>
      wned
      </div>
      <div>
      wned
      </div>
      <div>
      wned
      </div>
      <div>
      wned
      </div>
      <div>
      wned
      </div>
      <div>
      wned
      </div>
      <div>
      wned
      </div>
      <div>
      wned
      </div>
      <div>
      wned
      </div>
    </MainDashboardComponent>
  )
}

export default DashboardFront