import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import styled from 'styled-components'
import { ReactComponent as Wave } from '../../assets/wave.svg';

const MainView = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LandingTitle = styled.h1`
  position: relative;
  font-family: 'Changa', sans-serif;
`

const LandingCircle = styled.div`
  display: flex;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.waveFive};
`

const WaveOne = styled(Wave)`
  position: relative;
  height: 100px;
  top: 204px;
  transform: rotate(180deg) scale(35);
  z-index: 5;
  overflow: hidden;
  fill: ${({ theme }) => theme.colors.waveOne};
`

const WaveTwo = styled(Wave)`
  position: relative;
  height: 100px;
  top: 141px;
  transform: rotate(180deg) scale(42);
  z-index: 4;
  overflow: hidden;
  fill: ${({ theme }) => theme.colors.waveTwo};
  `

const WaveThree = styled(Wave)`
  position: relative;
  height: 100px;
  top: 92px;
  right: 425px;
  transform: rotate(180deg) scale(40);
  z-index: 3;
  overflow: hidden;
  fill: ${({ theme }) => theme.colors.waveThree};
`

const WaveFour = styled(Wave)`
  position: relative;
  height: 100px;
  top: 37px;
  right: 103px;
  transform: rotate(180deg) scale(25);
  z-index: 2;
  overflow: hidden;
  fill: ${({ theme }) => theme.colors.waveFour};
`

const Landing = () => {

  useEffect(() => {
    gsap.to('.wave-1', 35, {css: {left: '390px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})
    gsap.to('.wave-2', 43, {css: {right: '450px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})
    gsap.to('.wave-3', 95, {css: {left: '600px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})
    gsap.to('.wave-4', 48, {css: {right: '300px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})
  }, [])

  return (
    <MainView>
      <LandingTitle> PAT FINDLEY CODES</LandingTitle>
      <Link to='/Projects'>
    <LandingCircle>
      <WaveOne className='wave-1' alt='wave' />
      <WaveTwo className='wave-2' alt='wave' />
      <WaveThree className='wave-3'alt='wave' />
      <WaveFour className='wave-4'alt='wave' />
    </LandingCircle>
    </Link>
    </MainView>
  )
}

export default Landing;