import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './Contact.css'
import wave4 from '../../assets/wave4-color.svg'

const Contact = () => {
  const contactHead = useRef()
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
    e.preventDefault()

    fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSed7xFAkBBdilezfZe5ek5uCfr1BLEKcrlloZpu-sE0boxrbQ/formResponse', {
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
    
    handleFields()
  } 

  const getInputData = () => {
    let dataToPost = new FormData()
  
    dataToPost.append('entry.2005620554', contactName.current.value)
    dataToPost.append('entry.1045781291', contactEmail.current.value)
    dataToPost.append('entry.839337160', contactMessage.current.value)
    return dataToPost
  }

  const handleFields = () => {
    setSubmitted(true);
    contactName.current.value = '';
    contactEmail.current.value = '';
    contactMessage.current.value = '';
    setTimeout(() => { setSubmitted(false); }, 5000);
  }

  return (
		<div className="contact-wrap">
			<img className="contact-wave" src={wave4} alt="wave" />
			<div className="form-container">
				<div className="contact-hello-wrap">
          {submitted? 
          <h1 className="contact-head" ref={contactHead}> SENT! </h1> :
					<h1 className="contact-head" ref={contactHead}> SAY HELLO! </h1>
          }
				</div>
				<form
					className="contact-form"
					action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSed7xFAkBBdilezfZe5ek5uCfr1BLEKcrlloZpu-sE0boxrbQ/formResponse"
					method="POST"
					onSubmit={(e) => {
						submitForm(e);
					}}>
					<label className="form-field label" for="name-input">
						What do you go by these days?
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
						How can I reach you best?
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
						What's on your mind?
					</label>
          <textarea 
          className="form-message form-field input"
          for='message-input' 
          rows='5' 
          cols='10'
          ref={contactMessage}
          name="entry.839337160"
          placeholder="Let's get coffee!"
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