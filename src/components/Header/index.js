import React from 'react'
import { MdMenu } from 'react-icons/md'
import { StyledHeaderContainer } from './styles'

const Header = ({sideBarOpen, setSideBarOpen}) => {
  return (
    <StyledHeaderContainer>
      <MdMenu
        style={{ color: 'white', width: '45px', height: '45px' }}
        onClick={() => {
          setSideBarOpen(true)
        }}
      />
    </StyledHeaderContainer>
  )
}

export default Header