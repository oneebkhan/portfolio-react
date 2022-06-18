import styled from "styled-components";

export const MainDashboardComponent = styled.div`
  overflow-x: hidden
  position: relative;
`

export const BottomText = styled.div`
  font-family: 'Parisienne', Poppins;
  color: white; 
  position: absolute; 
  top: 40%;
  font-size: 9vh;
  padding: 0vh 0vw 0vw 10vw;
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
