import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './Contact.css'
import wave4 from '../../assets/wave4-color.svg'

const Contact = () => {
  const contactName = useRef()
  const contactEmail = useRef()
  const contactMessage = useRef()
  const [submitted, setSubmitted] = useState(false)

  // useEffect(() => {
  //   gsap.to('.wave-4', 20, {css: {right: '300px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})
  // }, [])
  useEffect(() => {
    gsap.to('.contact-wave', 30, {css: {right: '275px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})
    gsap.to('.contact-wave', 1.25, {css: {top: '70px'}, ease: 'bounce', yoyo: 'true', repeat: '-1'})
  }, [])
  
  const submitForm = (e) => {
    const submitURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSed7xFAkBBdilezfZe5ek5uCfr1BLEKcrlloZpu-sE0boxrbQ/formResponse'

    console.log("submit log")
    e.preventDefault()

    const getInputData = () => {
      let dataToPost = new FormData()
    
      dataToPost.append('entry.2005620554', contactName.current.value)
      dataToPost.append('entry.1045781291', contactEmail.current.value)
      dataToPost.append('entry.839337160', contactMessage.current.value)
      return dataToPost
    }

  fetch(submitURL, {
    method: "POST",
    mode: "no-cors",
    header:{
      'Content-Type': 'application/json'
     },
    body: getInputData()
    })
  .then(data => {
    console.log(data);
  })
  .catch(err => console.error(err))
} 

  return (
		<div className="contact-wrap">
			<img className="contact-wave" src={wave4} alt="wave" />
			<div className="form-container">
				<div className="contact-hello-wrap">
					<h1 className="contact-hello"> SAY HELLO! </h1>
				</div>
				<form
					className="contact-form"
					action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSed7xFAkBBdilezfZe5ek5uCfr1BLEKcrlloZpu-sE0boxrbQ/formResponse"
					method="POST"
					onSubmit={(e) => {
						submitForm(e);
					}}>
					<label className="form-field label" for="name-input">
						Your Name
					</label>
					<input
						className="form-name form-field input"
						for="name-input"
						type="text"
						ref={contactName}
						name="entry.2005620554"
						placeholder="Name"
						required="required"></input>
					<label className="form-field label" for="email-input">
						Your E-Mail
					</label>
					<input
						className="form-email form-field input"
						for="email-input"
						type="email"
						ref={contactEmail}
						name="entry.1045781291"
						placeholder="E-Mail"
						required="required"></input>
					<label className="form-field label" for="message-input">
						Say Hello!
					</label>
          <textarea 
          className="form-message form-field input"
          for='message-input' 
          rows='5' 
          cols='10'
          ref={contactMessage}
          name="entry.839337160"
          placeholder='Hey, Pat!'
          required="required"></textarea>
					<button className="submit-button" type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;