import React from 'react'
import { SidebarElement, SideBarContainer, StyledList, Spacer, SlideSideBar } from './style'

const SideBar = ({sideBarOpen = false, setSideBarOpen}) => {
  return (
    <SlideSideBar isOpened={sideBarOpen} >
      <div style={{color: 'red'}} onClick={()=>{console.log('yes');setSideBarOpen(false)}}>
        close dis plis
      </div>
      <SideBarContainer>
        <StyledList>
          <SidebarElement elemNum={1} isOpened={sideBarOpen} onClick={()=>{console.log('click'); setSideBarOpen(false)}}>Profile</SidebarElement>
          <Spacer/>
          <SidebarElement elemNum={2} isOpened={sideBarOpen} onClick={()=>{console.log('click'); setSideBarOpen(false)}}>Projects</SidebarElement>
          <Spacer/>
          <SidebarElement elemNum={3} isOpened={sideBarOpen} onClick={()=>{console.log('click'); setSideBarOpen(false)}}>Contact</SidebarElement>
        </StyledList>
      </SideBarContainer>
    </SlideSideBar>
  )
}

export default SideBar
