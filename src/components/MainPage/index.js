import React from 'react'
import { MainPageBackgroundImage, MainPageContainer } from './style'

const MainPageComponent = ({children}) => {
  return (
    <div>
      <MainPageBackgroundImage/>
      <MainPageContainer>{children}</MainPageContainer>
    </div>
  )
}

export default MainPageComponent