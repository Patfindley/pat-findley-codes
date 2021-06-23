import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import './Landing.css'
import wave from '../../assets/wave1.svg'



const Landing = () => {

  useEffect(() => {
    gsap.to('.wave-1', 35, {css: {left: '390px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})
    gsap.to('.wave-2', 43, {css: {right: '450px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})
    gsap.to('.wave-3', 95, {css: {left: '600px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})
    gsap.to('.wave-4', 50, {css: {right: '300px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})

  }, [])

  return (
    <div className='main-view'>
      <h1 className='landing-title' > PAT FINDLEY CODES</h1>
      <Link to='/Projects'>
    <div className='landing-circle'>
      <img className='wave-1'src={wave} alt='wave' />
      <img className='wave-2'src={wave} alt='wave' />
      <img className='wave-3'src={wave} alt='wave' />
      <img className='wave-4'src={wave} alt='wave' />
    </div>
    </Link>
    </div>
  )
}

export default Landing;