import styled from 'styled-components'
import { MdMenu } from 'react-icons/md'
import { BsInstagram, BsFacebook } from 'react-icons/bs'

export const StyledHeaderContainer = styled.div`
  padding: 2vh 3vw;
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 90%;
  animation-timing-function: ease-in-out;
  opacity: 0;
  animation: slideDown 700ms 1;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
`

export const StyledMdMenu = styled(MdMenu)`
  color: white; 
  width: 3.5vh; 
  height: 3.5vh;

  :hover {
    cursor: pointer;
  }
`

export const StyledSocialSection = styled.div`
  display: flex;
  justify-contnet: space-evenly;
  background-color: hsla(120, 100%, 100%, 0.12);
  align-items: center;
  padding: 1.2vh 2vh;
  border-radius: 100px;
`

export const StyledBsInstagram = styled(BsInstagram)`
  color: white; 
  width: 2vh;
  height: 2vh;
  padding: 0px 0.8vh;
  transition: all .2s ease-in-out;

  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`
export const StyledBsFacebook = styled(BsFacebook)`
  color: white; 
  width: 2vh;
  height: 2vh;
  padding: 0px 0.8vh;
  transition: all .2s ease-in-out;

  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`

