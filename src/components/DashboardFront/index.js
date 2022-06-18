import React from 'react'
import {
  MainDashboardComponent,
  BottomText,
  StyledVideo,
  BottomTextDescription,
  StyledButton,
  GreySection,
  BlackSection,
  SpinningFood,
  LeftPaddingFood,
  QuoteText,
  BottomArrow,
  StyledMdKeyboardArrowDown
} from './styles'
import { Spacer } from '../SideBar/style'
import Header from '../Header'
import { useNavigate } from 'react-router'

const DashboardFront = ({ sideBarOpen, setSideBarOpen }) => {
  const navigate  = useNavigate()
  return (
    <MainDashboardComponent>
      <StyledVideo
        autoPlay='autoplay'
        muted
        loop
        id='vid2'
        isOpened={true}
        fadeVideo={false}
      >
        <source type='video/mp4' src='Coffee.mp4' />
      </StyledVideo>
      <Header
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
      ></Header>
      <BottomText>
        Indulgence
        <BottomTextDescription>by ayesha </BottomTextDescription>
        <div>
          <Spacer multiply='0.3'></Spacer>
          <StyledButton
            onClick={() => {
              navigate('/recipes')
            }}
          >
            Explore Recipes
          </StyledButton>
        </div>
      </BottomText>
      <BottomArrow><StyledMdKeyboardArrowDown/></BottomArrow>
      <BlackSection>
        <QuoteText>
          The perfect choice for all things sweet and savoury
        </QuoteText>
      <LeftPaddingFood >
        <SpinningFood src="Circle_food.png" alt="" />
      </LeftPaddingFood>
      </BlackSection>
      <GreySection></GreySection>
    </MainDashboardComponent>
  )
}

export default DashboardFront
