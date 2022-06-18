import React from 'react'
import { StyledHeaderContainer, StyledMdMenu, StyledSocialSection, StyledBsInstagram, StyledBsFacebook } from './styles'

const Header = ({sideBarOpen, setSideBarOpen}) => {
  return (
    <StyledHeaderContainer>
      <StyledMdMenu
        onClick={() => {
          setSideBarOpen(true)
        }}
      />
      <StyledSocialSection>
        <StyledBsFacebook onClick={()=>{window.open('http://www.facebook.com','_blank')}}/>
        <StyledBsInstagram onClick={()=>{window.open('http://www.instagram.com','_blank')}}/>
      </StyledSocialSection>
    </StyledHeaderContainer>
  )
}

export default Header