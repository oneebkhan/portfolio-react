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
        <StyledBsFacebook onClick={()=>{window.open('https://facebook.com/profile.php?id=100056815101699','_blank')}}/>
        <StyledBsInstagram onClick={()=>{window.open('https://www.instagram.com/indulgence_by_ayesha/','_blank')}}/>
      </StyledSocialSection>
    </StyledHeaderContainer>
  )
}

export default Header