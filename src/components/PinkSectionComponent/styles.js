import styled from "styled-components";

export const FullContainer = styled.div`
  width: 100%;
  height: 50vh;
  padding-left: 7vw;
  padding-right: 3vw;
  color: rgb(228,179,5);
  font-size: 4vw;
  font-weight: 600;
`

export const ImageContainer = styled.img`
  width: 10vw;
  height: 10vw;
  top: ${props => props.pad};
`