import styled from "styled-components";
import { MdKeyboardArrowDown } from 'react-icons/md'

export const MainDashboardComponent = styled.div`
  overflow-x: hidden;
  position: relative;
  overflow-y: hidden;
`

export const BottomText = styled.div`
  font-family: 'Parisienne', Poppins;
  color: white; 
  position: absolute; 
  top: 50vh;
  font-size: 8vh;
  margin: 0vh 0vw 0vw 10vw;
  animation-timing-function: ease-in-out;
  opacity: 0;
  animation: slideDown 700ms 1;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
`

export const BottomTextDescription = styled.div`
  color: white; 
  padding-left: 10px;
  position: absolute; 
  font-size: 2.5vh;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
`

export const StyledButton = styled.div`
  display: inline-block;
  color: white;
  background-color: hsla(120, 100%, 100%, 0.15);
  padding: 1vh 2vh;
  border-radius: 100px;
  font-size: 2.0vh;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  transition: all .2s ease-in-out;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`

export const StyledVideo = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0%);
  animation: fade-in 2s forwards;
  -webkit-animation: fade-in 2s forwards;

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

export const BlackSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  color: white;
  margin: 10vh 0vh 9vh 0vh;
`

export const LeftPaddingFood = styled.div`
  margin-left: 80%;

  @media only screen and (max-width: 1100px) {
    margin-left: 70%;
  }
  @media only screen and (max-width: 800px) {
    margin-left: 50%;
  }
  @media only screen and (max-width: 500px) {
    margin-left: 40%;
  }
`

export const SpinningFood = styled.img`
  animation: rotation 50s infinite linear;
  transform: translate3d(0, 0, 0);
  
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`

export const QuoteText = styled.div`
  position: absolute;
  font-size: 2vw;
  margin-left: 9vw;
  max-width: 40%;

  @media only screen and (max-width: 800px) {
    margin-left: 10%;
    font-size: 2vh;
  }
`
export const BottomArrow = styled.div`
  font-family: 'Parisienne', Poppins;
  display: flex;
  justify-content: center;
  width: 100vw;
  color: white; 
  position: absolute; 
  top: 85vh;
  font-size: 8vh;
  animation-timing-function: ease-in-out;
  animation-name: stretch;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-play-state: running;

  @keyframes stretch {
    0% {
      opacity: 0;   
    }

    100% {
      opacity: 1;
    }
  }
`

export const StyledMdKeyboardArrowDown = styled(MdKeyboardArrowDown)`
  width: 3vh;
`

export const GreySection = styled.div`
  background-color: rgb(25,25,28);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  color: white;
  padding: 10vh 0vh 9vh 0vh;
  height: 200px;
`

export const PinkSection = styled.div`
  background-color: rgb(254,193,218);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  color: white;
`