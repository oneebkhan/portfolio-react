import styled from 'styled-components'

export const SidebarElement = styled.li`
  list-style-type: none;
  padding: 0px;
  font-size: 3vw;
  overflow: hidden;
  animation-timing-function: ease-in-out;
  ${props => !props.isOpened && 'color: white;'}
  animation: ${props => props.isOpened && 'slideDown 800ms 1;'}
  animation-delay: ${props => props.elemNum * 300 + 300}ms;
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
    color: black;
  }
  to {
    transform: translateY(0px);
    color: white;
  }


`

export const SideBarContainer = styled.ul`
  display: flex;
  height: 100vh;
  align-items: center;
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const Spacer = styled.div`
  height: 100px;
  width: 10px;
`

export const SlideSideBar = styled.div`
  position: absolute;
  background-color: black;
  width: 100px;
  height: 100px;
  animation-timing-function: ease-in-out;
  z-index: 1;
  animation: ${props => props.isOpened ? 'slide-in' : 'slide-out'} 0.5s forwards;
  -webkit-animation: ${props => props.isOpened ? 'slide-in' : 'slide-out'} 0.5s forwards;
      
  @keyframes slide-in {
      0% { transform: translateX(-100vw); }
      100% { transform: translateX(0px); }
  }

  @-webkit-keyframes slide-in {
      0% { transform: translateX(-100vw); }
      100% { -webkit-transform: translateX(0px); }
  }
      
  @keyframes slide-out {
      0% { transform: translateX(0px); }
      100% { transform: translateX(-100vw); }
  }

  @-webkit-keyframes slide-out {
      0% { -webkit-transform: translateX(0px); }
      100% { -webkit-transform: translateX(-100vw); }
  }
`
