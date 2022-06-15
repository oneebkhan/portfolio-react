import React from 'react'
import { MainPageBackgroundImage, MainPageContainer } from './style'

const MainPageComponent = ({children, image}) => {
  return (
    <div>
      <MainPageBackgroundImage src={image} alt='Blurred image'/>
      <MainPageContainer>{...children}</MainPageContainer>
    </div>
  )
}

export default MainPageComponent