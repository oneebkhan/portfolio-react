import React, { useEffect } from 'react'
import { StyledFade } from './styles'
import { useNavigate } from 'react-router-dom'

const WelcomeComponent = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/home', {replace: true})
    }, 1000);
  })

  return (
    <StyledFade></StyledFade>
  )
}

export default WelcomeComponent