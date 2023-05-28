import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!localStorage.getItem('entered')) {
      navigate('/login')
    }
  })
  return (
    <div>Hey is the best about i can make</div>
  )
}

export default About