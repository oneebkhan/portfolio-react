import React, { useEffect, useState } from 'react'
import {
  SidebarElement,
  SideBarContainer,
  StyledList,
  Spacer,
  SlideSideBar,
  StyledVideo
} from './style'
import { MdClose } from 'react-icons/md'

const SideBar = ({ sideBarOpen = false, setSideBarOpen, video, setVideo }) => {
  const [firstLoad, setFirstLoad] = useState(false)
  const [fadeVideo, setFadeVideo] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFirstLoad(true)
    }, 500)
  }, [])

  useEffect(() => {
    if (sideBarOpen) {
      setFadeVideo(true)
      const vids = document.getElementById('vid')
      vids.src = video
      setTimeout(() => {
        setFadeVideo(false)
      }, 500)
      vids.play()
    }
  }, [video, sideBarOpen])

  if (sideBarOpen) {
    document.getElementById('vid').play()
  }

  return (
    <SlideSideBar isOpened={sideBarOpen} firstLoad={firstLoad}>
      <StyledVideo
        autoplay
        muted
        loop
        id='vid'
        isOpened={sideBarOpen}
        fadeVideo={fadeVideo}
      >
        <source type='video/mp4' src={video}/>
      </StyledVideo>
      <MdClose
        style={{
          color: 'white',
          width: '45px',
          height: '45px',
          padding: '2vh 3vw',
          position: 'relative'
        }}
        onClick={() => {
          setSideBarOpen(false)
        }}
      />
      <Spacer multiply={3}/>
      <SideBarContainer>
        <StyledList>
          <SidebarElement
            elemNum={1}
            isOpened={sideBarOpen}
            onMouseEnter={() => {
              setVideo('Fruit.mp4')
            }}
            onClick={() => {
              setSideBarOpen(false)
            }}
          >
            Home
          </SidebarElement>
          <Spacer />
          <SidebarElement
            elemNum={2}
            isOpened={sideBarOpen}
            onMouseEnter={() => {
              setVideo('Cookies.mp4')
            }}
            onClick={() => {
              setSideBarOpen(false)
            }}
          >
            Recipes
          </SidebarElement>
          <Spacer />
          <SidebarElement
            elemNum={3}
            isOpened={sideBarOpen}
            onMouseEnter={() => {
              setVideo('People.mp4')
            }}
            onClick={() => {
              setSideBarOpen(false)
            }}
          >
            About
          </SidebarElement>
        </StyledList>
      </SideBarContainer>
    </SlideSideBar>
  )
}

export default SideBar
