import React, { useEffect } from 'react'
import { FullContainer, ImageContainer } from './styles'

const PinkSectionComponent = ({ useRef, navigate, StyledButton }) => {
  let topPos
  let bottomPos
  let perc = 0
  const refRef = useRef(null)
  const pictureRef = useRef(null)

  useEffect(() => {
    topPos =
      refRef && refRef.current && refRef.current.getBoundingClientRect().top
    bottomPos =
      refRef && refRef.current && refRef.current.getBoundingClientRect().bottom
  }, [refRef && refRef.current && !!refRef.current])

  window.onscroll = () => {
    let perc = 0
    const scrollPos = window.scrollY + window.innerHeight
    if (topPos <= scrollPos && scrollPos <= bottomPos) {
      perc = ((scrollPos - topPos) / (bottomPos - topPos)) * 100
    }
    pictureRef.current.style.transform = `scale(${perc / 100 || 1}) rotate(${(perc/2) - 70}deg)`
  }

  return (
    <FullContainer ref={refRef}>
        Get Our Latest Recipes Today
        <div>
          <StyledButton
            style={{
              color: 'rgb(228,179,5)',
              backgroundColor: 'rgb(228,179,5, 0.2)'
            }}
            onClick={() => {
              navigate('/recipes')
            }}
          >
            Go to Recipes
          </StyledButton>
        </div>
        <div
          style={{
            top: `${perc}%`,
            left: `${perc}%`,
            zIndex:`0`,
            position: 'relative',
            backgroundColor: 'red',
          }}
          ref={pictureRef}
        >
          <ImageContainer pad='10px' src='Yellow_macaron.png' alt='' />
          <ImageContainer pad='40px' src='Yellow_macaron.png' alt='' />
          <ImageContainer pad='99px' src='Yellow_macaron.png' alt='' />
        </div>
    </FullContainer>
  )
}

export default PinkSectionComponent
