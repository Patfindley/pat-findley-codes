import { useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components'
import { LinkStyle } from '../../theme/GlobalStyles';
import { ReactComponent as Wave } from '../../assets/wave.svg';
import './AboutMe.css'
import me_photo from '../../assets/me_photo.JPG'

const Wrap = styled.div`
  display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
  overflow: hidden;
  background: linear-gradient(to bottom, transparent 30%, ${({ theme }) => theme.colors.waveThree} 0%);
  transition: all 0.5s linear;
`

const Greeting = styled.h2`
  margin-top: 75px;
`

const WaveBackground = styled(Wave)`
  position: relative;
  height: 100px;
  top: 280px;
  transform: rotate(180deg) scale(6.5);
  overflow: hidden;
  z-index: 1;
  fill: ${({ theme }) => theme.colors.waveThree};
`

const PhotoContainer = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.body} -3%, ${({ theme }) => theme.colors.waveThree} 88%)
  @media only screen and (max-width: 280px) {
  height: 250px;
      width: 250px;
    }
`

const Photo = styled.img`
  width: 100%;
	position: relative;
`

const BodyContainer = styled.article`
  border-radius: 10px;
	width: 36em;
	font-size: 22px;
	line-height: 1.4;
	margin: 25px;
	padding: 20px;
  background-color: ${({ theme }) => theme.colors.body};
	-webkit-box-shadow: ${({ theme }) => theme.colors.WebkitBoxShadow}; 
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  z-index: 2;
  transition: all 0.5s linear;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
        width: 86%;
      }
  @media only screen and (max-width: 425px) {
    font-size: 18px;
        width: 79%;
      }
  @media only screen and (max-width: 320px) {
    font-size: 17px;
        width: 78%;
      }  
`

const Check = styled.span`
  color: ${({ theme }) => theme.colors.waveThree};
`


const AboutMe = () => {
  useEffect(() => {
    gsap.to('.about-wave', 30, {css: {right: '275px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})
    gsap.to('.about-wave', 1.25, {css: {top: '282px'}, ease: 'bounce', yoyo: 'true', repeat: '-1'})
  }, [])

  return (
		<Wrap>
				<Greeting>Hi, I'm Pat Findley</Greeting>
        <WaveBackground className='about-wave' alt="wave" />
			<PhotoContainer>
				<Photo src={me_photo} alt="Pat Findley" />
			</PhotoContainer>
			<BodyContainer className="about-me-body-container">
				<p className="about-me-body">
					{" "}
					I'm a web developer, father, husband, service industry veteran,{" "}
					<LinkStyle
						style={{ animationDelay: "0.07s" }}
						href="https://herenowband.com/"
						target="_blank"
						rel="noreferrer">
						musician
					</LinkStyle>
					, creator, doer, and (aspiring) optimist.
					<br />
					<br />
					When the world started shutting down in 2020, Everything I had spent
					the previous years building and working on came to a screeching halt.
					Restaurants closed, I was out of work. I had just released an album,
					stocked merchandise, the tours got cancelled.
					<br />
					<br />
					<strong>I saw an opportunity.</strong>
					<br />
					<br />I spent some time with my daughter, who was 1 at the time, and I
					started thinking about who I was, and what else I was capable of. 13
					years in the service industry felt like enough. I looked into web
					development, dipped my toes in the water with some{" "}
					<LinkStyle
						style={{ animationDelay: "0.14s" }}
						href="https://www.codecademy.com/"
						target="_blank"
						rel="noreferrer">
						codecademy
					</LinkStyle>{" "}
					courses and found something that I never thought would fit me, but
					checked <em>every box</em>.<br />
					<Check>&#10003;</Check>Deep <br />
					<Check className="check">&#10003;</Check>Creative <br />
					<Check className="check">&#10003;</Check>Collaboritive <br />I enrolled
					in{" "}
					<LinkStyle
						style={{ animationDelay: "0.21s" }}
						href="https://turing.io/"
						target="_blank"
						rel="noreferrer">
						{" "}
						Turing School of Software and Design's
					</LinkStyle>{" "}
					Front-End program, unaware it would become the first accredited coding
					bootcamp, and can't believe what I was able to learn in such a short
					time. I built <strong>A LOT</strong> of basic vanilla JS apps, And
					that really laid a strong foundation to start building
					<strong> A LOT </strong>of React Apps.
					<br />
					<br />
					In the midst of speed-running React applications, I found a passion
					for creating alluring user interfaces. Obviously who doesn't live
					manipulating data sets, but the satisfaction of imagining an image
					like the landing you probably clicked to get here, and then animating
					it to life really gets me fired up. <br />
					<br />
					I've spent my life creating; Putting <em>something</em> where there
					used to be <em>nothing</em>. The literal side of it usually meant
					filling rooms with people, and all of the planning and hustling that
					goes into that, music being the main motivator. I couldn't pinpoint a
					single thing about making music to be <em>the</em> thing that drives
					me, but I realized all of the same skills are getting called when
					bringing something to life in an application.
					<br />
					<br />
					I'm currently a Front End Developer at <LinkStyle
						style={{ animationDelay: "0.21s" }}
						href="https://www.neomindlabs.com/"
						target="_blank"
						rel="noreferrer">
						{" "}
						Neomind Labs, </LinkStyle>
          and learning Typescript, &amp; Tailwind in my free time.
				</p>
			</BodyContainer>
		</Wrap>
	);
}

export default AboutMe;