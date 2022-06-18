import styled from 'styled-components'

export const SidebarElement = styled.li`
  list-style-type: none;
  padding: 0px;
  font-size: 3vh;
  overflow: hidden;
  animation-timing-function: ease-in-out;
  cursor: pointer;
  color: white;
  opacity: 0;
  ${props => !props.isOpened && 'opacity: 1;'}
  animation: ${props => props.isOpened && 'slideDown 700ms 1;'}
  animation-delay: ${props => props.elemNum * 300 + 250}ms;
  animation-fill-mode: forwards;

  :after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  :hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  
  @keyframes slideDown {
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    color: white;
    opacity: 1;
  }


`

export const SideBarContainer = styled.ul`
  display: flex;
  align-content: center;
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const Spacer = styled.div`
  height: ${props => (props.multiply || 1) * 8}vh;
  width: 10px;
`

export const SlideSideBar = styled.div`
  position: fixed;
  background-color: black;
  width: 100vw;
  height: 100vh;
  animation-timing-function: ease-in-out;
  z-index: 1;
  animation: ${props => (props.isOpened ? 'slide-in' : 'slide-out')}
    ${props => (props.firstLoad ? '0.4s forwards' : '0s forwards')};
  -webkit-animation: ${props => (props.isOpened ? 'slide-in' : 'slide-out')}
    ${props => (props.firstLoad ? '0.4s forwards' : '0s forwards')};

  @keyframes slide-in {
    0% {
      transform: translateX(-100vw);
    }
    100% {
      transform: translateX(0px);
    }
  }

  @-webkit-keyframes slide-in {
    0% {
      transform: translateX(-100vw);
    }
    100% {
      -webkit-transform: translateX(0px);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-100vw);
    }
  }

  @-webkit-keyframes slide-out {
    0% {
      -webkit-transform: translateX(0px);
    }
    100% {
      -webkit-transform: translateX(-100vw);
    }
  }
`

export const StyledVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  filter: brightness(0%);
  animation: ${props => (props.isOpened || props.fadeVideo) && 'fade-in'} 2s
    forwards;
  -webkit-animation: ${props =>
      (props.isOpened || props.fadeVideo) && 'fade-in'}
    2s forwards;

  @keyframes fade-in {
    0% {
      filter: brightness(0%);
    }
    100% {
      filter: brightness(40%);
    }
  }

  @-webkit-keyframes fade-in {
    0% {
      filter: brightness(0%);
    }
    100% {
      filter: brightness(40%);
    }
  }
`
