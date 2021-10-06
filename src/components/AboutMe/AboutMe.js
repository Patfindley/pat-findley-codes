import { useEffect } from 'react';
import { gsap } from 'gsap';
import './AboutMe.css'
import me_photo from '../../assets/me_photo.JPG'
import wave3 from '../../assets/wave3-color.svg'

const AboutMe = () => {
  useEffect(() => {
    gsap.to('.about-wave', 30, {css: {right: '275px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})
    gsap.to('.about-wave', 1.25, {css: {top: '282px'}, ease: 'bounce', yoyo: 'true', repeat: '-1'})
  }, [])

  return (
		<div className="about-me-wrap">
      <img className="about-wave" src={wave3} alt="wave" />
			<div className="me-picture-container">
				<img className="me-photo" src={me_photo} alt="Pat Findley" />
			</div>
			<div className="about-me-body-container">
				<p className="about-me-body">
					{" "}
					I'm a web developer, father, husband, service industry veteran,{" "}
					<a
						className="active-link"
						style={{ animationDelay: "0.07s" }}
						href="https://herenowband.com/"
						target="_blank"
						rel="noreferrer">
						musician
					</a>
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
					<a
						className="active-link"
						style={{ animationDelay: "0.14s" }}
						href="https://www.codecademy.com/"
						target="_blank"
						rel="noreferrer">
						codecademy
					</a>{" "}
					courses and found something that I never thought would fit me, but
					checked <em>every box</em>.<br />
					<span className="check">&#10003;</span>Deep <br />
					<span className="check">&#10003;</span>Creative <br />
					<span className="check">&#10003;</span>Collaboritive <br />I enrolled
					in{" "}
					<a
						className="active-link"
						style={{ animationDelay: "0.21s" }}
						href="https://turing.io/"
						target="_blank"
						rel="noreferrer">
						{" "}
						Turing School of Software and Design's
					</a>{" "}
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
					I'm, Currently playing with Context API, Theming, and GraphQL, While
					polishing up an App built with some friends called{" "}
					<a
						className="active-link"
						style={{ animationDelay: "0.28s" }}
						href="https://mysterious-cove-94790.herokuapp.com/"
						target="_blank"
						rel="noreferrer">
						"What We Eatin"
					</a>
					.
				</p>
			</div>
		</div>
	);
}

export default AboutMe;