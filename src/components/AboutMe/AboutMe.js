import './AboutMe.css'
import me_photo from '../../assets/me_photo.JPG'


const AboutMe = () => {
  return (
    <div className='about-me-wrap'>
    <div className='me-picture-container' >
    <img className='me-photo' src={me_photo} alt='Pat Findley'/>
    </div>
    <p className='about-me-body'> I'm a web developer, father, husband, service industry veteran, <a href='https://herenowband.com/' target='_blank' rel="noreferrer">musician</a>, creator, doer, and (aspiring) optimist.<br/>
    <br/>
    When the world started shutting down in 2020, Everything I had spent the previous years building and working on came to a screeching halt.<br/>
    Restaurants closed, I was out of work. I had just released an album, stocked merchandise, the tours got cancelled.<br/>
    <br/>
    <strong>I saw an opportunity.</strong><br/>
    <br/>
    I spent some time with my daughter, who was 1 at the time, and I started thinking about who I was, and what else I was capable of. <br/>
    13 years in the service industry felt like enough.<br/>
    I looked into web development, dipped my toes in the water with some <a href='https://www.codecademy.com/' target='_blank' rel="noreferrer">codecademy</a> courses <br/>
    and found something that I never thought would fit me, but checked <em>every box</em>.<br/>
    <span className='check'>&#10003;</span>Deep <br/>
    <span className='check'>&#10003;</span>Creative <br/>
    <span className='check'>&#10003;</span>Collaboritive <br/>
    I enrolled in <a href="https://turing.io/" target='_blank' rel="noreferrer"> Turing School of Software and Design's</a> Front-End program, unaware it would become the first accredited coding bootcamp, <br/> 
    and can't believe what I was able to learn in such a short time. <br/>
    I built <strong>A LOT</strong> of basic vanilla JS apps, And that really laid a strong foundation to start building <br/>
    <strong>A LOT</strong> of React Apps.

  </p>
  </div>
  )
}

export default AboutMe;