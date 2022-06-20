import React, {useRef, useEffect} from 'react'
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
  StyledMdKeyboardArrowDown,
  PinkSection
} from './styles'
import { Spacer } from '../SideBar/style'
import Header from '../Header'
import { useNavigate } from 'react-router'
import PinkSectionComponent from '../PinkSectionComponent'

const DashboardFront = ({ sideBarOpen, setSideBarOpen }) => {
  // const pinkRef = useRef(null)
  const navigate  = useNavigate()
  // let pinkSection

  //  useEffect(() => {
  //   pinkSection = pinkRef && pinkRef.current && pinkRef.current.getBoundingClientRect().top
  // }, [pinkRef && pinkRef.current && !!pinkRef.current])

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
        <BottomTextDescription>by sheikh</BottomTextDescription>
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
      <PinkSection>
        <PinkSectionComponent useRef={useRef} navigate={navigate} StyledButton={StyledButton}></PinkSectionComponent>
      </PinkSection>
    </MainDashboardComponent>
  )
}

export default DashboardFront
